//Leen
import "./tip.css";
export default function Tips() {
    const tips = [
        "اشرب الماء بعد كل وجبة لتقليل بقايا الطعام.",
        "استعمل غسول الفم بعد تنظيف الأسنان لتعزيز النظافة.",
        "تجنب قضم الأظافر أو استخدام الأسنان في فتح الأشياء.",
        "اختر فرشاة أسنان ناعمة لتحمي اللثة من الخدش.",
        "استبدل فرشاة الأسنان كل ثلاثة أشهر على الأقل.",
        "قلّل المشروبات الغازية للحفاظ على مينا الأسنان.",
        "امضغ علكة خالية من السكر لتحفيز إفراز اللعاب.",
        "تناول الأطعمة الغنية بالكالسيوم لتقوية الأسنان.",
        "نظّف لسانك بلطف لإزالة البكتيريا والروائح.",
        "راقب أي حساسية أو ألم وراجع طبيب الأسنان فوراً."
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    const otherTips = tips.filter(tip => tip !== randomTip);

    return (
        <div className="container mt-5">

            {/* نصيحة اليوم */}
            <div className="card shadow-sm border-0 mb-4" style={{ backgroundColor: "#fffdf0" }}>
                <div className="card-body text-center">
                    <h4 className="mb-3">💡 نصيحة اليوم</h4>
                    <hr className="opacity-50" />
                    <p className="text-muted fs-5">{randomTip}</p>
                </div>
            </div>

            {/* بقية النصائح */}
            <h5 className="mb-3">🦷 بقية النصائح</h5>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {otherTips.map((tip, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: "azure" }}>
                            <div className="card-body d-flex align-items-center">
                                <span className="me-2">💡</span>
                                <p className="mb-0">{tip}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}