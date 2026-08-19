حزمة Power BI - تخطيط القوى العاملة
(الإصدار المُعاد تصميمه بهوية تجمع تبوك الصحي - ثيم ألوان رسمي + شعار + خطوط Janna + تخطيط RTL كامل)

0) قبل أي شيء: ثبّت الخطين التاليين على نظام التشغيل (Windows) من مجلد ../assets/:
   - Janna-LT-Bold.ttf
   - Janna-LT-Regular.ttf
   (كليك يمين على كل ملف > Install). هذه خطوة إلزامية، لأن Power BI Desktop يعرض فقط الخطوط
   المثبّتة على الجهاز ولا يضمّنها داخل ملف PBIP. بدون تثبيتها ستظهر العناوين بخط بديل مؤقتًا.

1) فك ضغط الملف كاملًا في مسار قصير مثل:
   C:\PBI\Workforce_Planning_PBIP

2) في Power BI Desktop فعّل - إذا لم تكن مفعلة:
   File > Options and settings > Options > Preview features
   - Power BI Project (.pbip) save option
   - Store reports using enhanced metadata format (PBIR)
   - Store semantic model using TMDL format
   ثم أعد تشغيل Power BI Desktop.

3) افتح:
   Workforce_Planning.pbip
   وإذا لم يفتح الاختصار، افتح:
   Workforce_Planning.Report\definition.pbir

4) لأن ملف PBIP لا يحتوي cache.abf، اضغط Refresh مرة واحدة.
   البيانات مضمّنة داخل نموذج Power Query نفسه، لذلك لا يعتمد المشروع على مسار Excel خارجي.

5) بعد اكتمال التحميل:
   File > Save As
   ويمكن حفظ نسخة PBIX إذا رغبت.

الصفحات:
- الملخص التنفيذي
- الجودة والمخاطر
- تفاصيل القوى العاملة

مهم:
لم يتم إنشاء مؤشرات العجز/الفائض/نسبة التغطية لأن المصدر لا يحتوي Target FTE/الملاك المعتمد أو عبء العمل أو الشواغر.
هذا مقصود حتى لا تظهر مؤشرات غير قابلة للدفاع عنها في المقابلة.

الهوية البصرية:
الثيم مسجَّل تلقائيًا (Workforce_Planning.Report\StaticResources\RegisteredResources) ويُطبَّق فور الفتح
دون أي إعداد إضافي. راجع ملف ../assets/design-brief.md لتفاصيل نظام الألوان والتايبوغرافي الكامل،
و../CHANGELOG.md لملخص كل ما تغيّر في هذه النسخة.
