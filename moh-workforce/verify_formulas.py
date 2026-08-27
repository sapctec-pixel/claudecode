# -*- coding: utf-8 -*-
"""تقييم كل صيغة في ملف النموذج والتحقق من خلوه من أخطاء الصيغ.

يُستخدم بديلاً عن LibreOffice (recalc.py) الذي يتعذّر تشغيله في بيئة البناء.
    pip install formulas && python3 verify_formulas.py
"""
import collections, sys, warnings
import formulas

warnings.filterwarnings("ignore")
XLSX = "MOH_Workforce_Standards_2023.xlsx"
ERRTOK = ("#REF!", "#NAME?", "#VALUE!", "#DIV/0!", "#N/A", "#NULL!", "#NUM!")

sol = formulas.ExcelModel().loads(XLSX).finish().calculate()
errs, samples, vals = collections.Counter(), {}, {}
for k, v in sol.items():
    try:
        val = v.value[0, 0]
    except Exception:
        continue
    vals[k] = val
    s = str(val).strip()
    if s in ERRTOK:
        errs[s] += 1
        samples.setdefault(s, []).append(k)

print(f"خلايا مُقيَّمة: {len(vals)}")
print(f"أخطاء الصيغ: {dict(errs) if errs else 'لا يوجد'}")
for t, ks in samples.items():
    print(f"  {t}: {ks[:10]}")


def get(sheet, cell):
    key = f"'[{XLSX}]{sheet}'!{cell}".upper()
    return next((v for k, v in vals.items() if k.upper() == key), None)


# تحقق من مطابقة مجاميع النموذج للمجاميع المنشورة في ورقة التحقق
mismatch = 0
for r in range(5, 19):
    res = get("التحقق من المطابقة", f"F{r}")
    if res and "فرق يستوجب المراجعة" in str(res):
        mismatch += 1
        print(f"  فرق في الصف {r}: {get('التحقق من المطابقة', f'A{r}')} "
              f"({get('التحقق من المطابقة', f'E{r}')})")
print(f"صفوف التدقيق غير المطابقة: {mismatch} "
      "(المتوقع 1 — جدول فنيي الولادة والأطفال، فرق موثّق في الدليل)")

sys.exit(1 if errs else 0)
