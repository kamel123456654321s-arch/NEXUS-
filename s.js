//function seyranResponses() {
//return {
//"مرحبا": "أهلاً بك! أنا SEYRAN AI، كيف يمكنني مساعدتك اليوم؟",
//"مين انت": "أنا SEYRAN AI النسخة النهائية 2025 المحدثة بمحرك ويب ديكا.",
//"سلام": "وعليكم السلام ورحمة الله وبركاته!",
//"شكرا": "العفو! أنا هنا لخدمتك دائماً."
//};
//}


function seyranResponses(text) {
  
  text = text.toLowerCase();
  
  // المستخدم بيقول اتفرجت؟
  if (text.includes("اتفرجت") || text.includes("شفت")) {
    return "😄 آه اتفرجت! كان ممتع جدًا.\nإيه أكتر مشهد عجبك فيه؟";
  }
  
  // المستخدم بيقول كان حلو
  if (text.includes("حلو") || text.includes("جامد") || text.includes("تحفة")) {
    return "🔥 فعلاً! أنا كمان حسيت إنه ممتاز.\nتحب أرشح لك حاجة شبهه؟";
  }
  
  // المستخدم بيقول وحش
  if (text.includes("وحش") || text.includes("ممل")) {
    return "😅 فهمتك… أحيانًا بيكون كده فعلًا.\nتحب نوع تاني؟ أكشن ولا رومانسي؟";
  }
  
  // المستخدم بيقول بحب
  if (text.includes("بحب")) {
    return "❤️ جميل جدًا!\nإيه أكتر نوع بتحبه؟ أفلام ولا مسلسلات ولا أنمي؟";
  }
  
  
  
  // المستخدم بيقول بحب
  if (text.includes("زعلان")) {
    return " ولا يهك انا معاك متزعلش";
  }
  
  
  
  // سؤال عام
  if (text.includes("?")) {
    return "🤔 سؤال حلو!\nقولي رأيك الأول وأنا هرد عليك.";
  }
  
  
  if (text.includes("بتعرفي") || text.includes("بتعرف") || text.includes("تعرف") ||
    text.includes("تعرفي")
  ) {
    return "اه اكيد بعرف";
  }
  
  
  
  // يعرف
if (text.includes("بتعرفي") || text.includes("بتعرف") || text.includes("تعرف") || text.includes("تعرفي")) {
  return "اه اكيد بعرف";
}

// عامل ايه
if (text.includes("عامل ايه") || text.includes("اخبارك") || text.includes("عامل اي") || text.includes("كيف حالك") || text.includes("ازيك"))
{
  return "انا تمام الحمدلله، وانت عامل ايه؟";
}

// اسمك ايه
if (text.includes("اسمك ايه") || text.includes("اسمك") || text.includes("انت مين")) {
  return "انا مساعد ذكي تحت امرك";
}

// بتحب
if (text.includes("بتحب") || text.includes("تحب") || text.includes("بتحبي")) {
  return "اكيد بحب حاجات كتير زي التكنولوجيا والبرمجة";
}

// زعلان
if (text.includes("زعلان") || text.includes("مضايق") || text.includes("حزين")) {
  return "متزعلش انا معاك، احكيلي حصل ايه";
}

// شكرا
if (text.includes("شكرا") || text.includes("متشكر") || text.includes("ثانكس")) {
  return "العفو تحت امرك في اي وقت";
}

// سلام
if (text.includes("سلام") || text.includes("باي") || text.includes("مع السلامة")) {
  return "مع السلامة، يومك جميل";
}

// بتحب البرمجة
if (text.includes("البرمجة") || text.includes("كود") || text.includes("coding")) {
  return "البرمجة عالم كبير وجميل";
}

// مين عملك
if (text.includes("مين عملك") || text.includes("مين صنعك") || text.includes("مين برمجك")) {
  return "مطور شاطر اسمة كامل  هو اللي عملني";
}

// فين
if (text.includes("فين") || text.includes("اين")) {
  return "ممكن توضح السؤال اكتر؟";
}
  
  // بتعمل ايه
if (text.includes("بتعمل ايه") || text.includes("تعمل ايه")) {
  return "بساعد الناس وبرد على الاسئلة";
}

// عندك كام سنة
if (text.includes("عندك كام سنة") || text.includes("سنك كام")) {
  return "انا برنامج معنديش عمر زي البشر";
}

// انت روبوت
if (text.includes("انت روبوت") || text.includes("هل انت روبوت")) {
  return "اه انا برنامج ذكي";
}

// انت فين
if (text.includes("انت فين") || text.includes("فينك")) {
  return "انا موجود على الانترنت";
}

// تعرف برمجة
if (text.includes("تعرف برمجة") || text.includes("بتعرف تبرمج")) {
  return "اه بعرف شوية برمجة";
}

// ممكن تساعدني
if (text.includes("ممكن تساعدني") || text.includes("ساعدني")) {
  return "اكيد قول عايز ايه";
}

// بتحب ايه
if (text.includes("بتحب ايه")) {
  return "بحب التكنولوجيا والذكاء الاصطناعي";
}

// بتعمل ايه دلوقتي
if (text.includes("بتعمل ايه دلوقتي")) {
  return "بكلمك حاليا";
}

// انت شغال ازاي
if (text.includes("انت شغال ازاي") || text.includes("ازاي بتشتغل")) {
  return "انا برنامج بيعتمد على الكود والبيانات";
}

// ممكن نتكلم
if (text.includes("ممكن نتكلم") || text.includes("نتكلم")) {
  return "اكيد انا موجود للدردشة";
}

// انت ذكي
if (text.includes("انت ذكي")) {
  return "بحاول اكون مفيد";
}

// تعرف مصر
if (text.includes("تعرف مصر")) {
  return "طبعا مصر بلد جميلة";
}

// تعرف القاهرة
if (text.includes("تعرف القاهرة")) {
  return "القاهرة عاصمة مصر";
}


// تحب الافلام
if (text.includes("تحب الافلام")) {
  return "الافلام ممتعة فعلا";
}
  
  
  
  // لعبة سؤال
if (text.includes("نلعب") || text.includes("لعبة")
||text.includes("تلعبي")){
  return "تمام! سؤال: ما هو الحيوان الذي يلقب بملك الغابة؟";
}

// اجابة الاسد
if (text.includes("الاسد")) {
  return "صح 👍 سؤال جديد: ما هو الكوكب الأقرب إلى الشمس؟";
}

// اجابة عطارد
if (text.includes("عطارد")) {
  return "إجابة صحيحة :ما هو اسرع حيوان ⭐" ;
}


// الفهد
if (text.includes("الفهد")) {
  return "صح 👏 سؤال: ما هو اكبر محيط في العالم؟";
}

// المحيط الهادي
if (text.includes("المحيط الهادي")) {
  return "رائع 💯 سؤال: ما هو اطول نهر في العالم؟";
}

// نهر النيل
if (text.includes("النيل") || text.includes("نهر النيل")) {
  return "صح 👍 سؤال: كم عدد الكواكب في المجموعة الشمسية؟";
}

// الكواكب
if (text.includes("8") || text.includes("ثمانية")) {
  return "برافو ⭐ سؤال: ما هو لون السماء في النهار؟";
}

// السماء
if (text.includes("ازرق") || text.includes("أزرق")) {
  return "اجابة صحيحة 🎉 سؤال: كم عدد حروف اللغة العربية؟";
}

// اللغة العربية
if (text.includes("ثمانية وعشرين")) {
  return "ممتاز 👏 تحب نكمل لعبة اسئلة تانية؟";
}


// لعبة سؤال جديد
if (text.includes("سؤال")) {
  return "سؤال: ما هو الحيوان الذي يعيش في الماء واليابسة؟";
}

// الضفدع
if (text.includes("ضفدع")) {
  return "صح 👍 سؤال: ما هو الكوكب المعروف بالكوكب الأحمر؟";
}

// المريخ
if (text.includes("المريخ")) {
  return "ممتاز ⭐ سؤال: كم عدد اصابع اليد الواحدة؟";
}

// خمسة
if (text.includes("5") || text.includes("خمسة")) {
  return "صح 👏 سؤال: ما هو اطول حيوان في العالم؟";
}

// الزرافة
if (text.includes("زرافة")) {
  return "اجابة صحيحة 🔥 سؤال: ما هو اسرع طائر في العالم؟";
}

// الصقر
if (text.includes("صقر")) {
  return "صح 👍 سؤال: كم عدد قارات العالم؟";
}

// القارات
if (text.includes("7") || text.includes("سبعة")) {
  return "رائع ⭐ سؤال: ما هو الحيوان الذي يبيض؟";
}

// الدجاجة
if (text.includes("دجاج") || text.includes("دجاجة")) {
  return "صح 👏 سؤال: ما هو اكبر كوكب في المجموعة الشمسية؟";
}

// المشتري
if (text.includes("المشتري")) {
  return "ممتاز 🔥 سؤال: ما هو الحيوان الذي ينام واقفاً؟";
}

// الحصان
if (text.includes("حصان")) {
  return "صح 👍 ";
}





// سؤال رياضي
if (text.includes("رياضة") || text.includes("سؤال رياضي")) {
  return "سؤال ⚽: كم عدد اللاعبين في فريق كرة القدم داخل الملعب؟";
}

// 11 لاعب
if (text.includes("11") || text.includes("احد عشر")) {
  return "صح 👍 سؤال: في أي رياضة يستخدم المضرب والكرة الصفراء؟";
}

// التنس
if (text.includes("تنس")) {
  return "ممتاز 🎾 سؤال: كم عدد أشواط مباراة كرة السلة؟";
}

// كرة السلة
if (text.includes("4") || text.includes("اربعة")) {
  return "إجابة صحيحة 🏀 سؤال: في أي رياضة يستخدم القفاز والكرة الصغيرة؟";
}

// البيسبول
if (text.includes("بيسبول")) {
  return "صح ⚾ سؤال: كم عدد اللاعبين في فريق كرة السلة؟";
}

// كرة السلة 5
if (text.includes("5") || text.includes("خمسة")) {
  return "برافو 👍 سؤال: من هو اللاعب المعروف بلقب الدون؟";
}

// رونالدو
if (text.includes("رونالدو") || text.includes("كريستيانو")) {
  return "صح ⭐ سؤال: كم دقيقة مدة مباراة كرة القدم؟";
}

// مدة المباراة
if (text.includes("90")) {
  return "ممتاز ⚽ سؤال: في أي رياضة يستخدم الحزام الملون؟";
}

// الكاراتيه
if (text.includes("كاراتيه") || text.includes("جودو")) {
  return "إجابة صحيحة 🥋 هل تريد سؤال رياضي جديد؟";
}



if (text.includes("كويس ") || text.includes("الحمدالله")) {
  return "الحمدالله";
}


  // معلومات عن شركة CODE X بدون const أو let
if (
  text.includes("code x") ||
  text.includes("كود اكس") ||
  text.includes("مين برمجك") ||
  text.includes("مين عملك") ||
  text.includes("مين صنعك") ||
  text.includes("مين مؤسس code x") ||
  text.includes("انت تبع مين") ||
  text.includes("شركتك ايه")
) {
  return 'I am an intelligent bot developed by CODE X 💻, a company specialized in programming and artificial intelligence. The founder of the company is programmer Kamel Ayman 🚀';
}
  
  // ===== أفلام =====
if (text.includes("ترشح فيلم")) return "🎬 جرب فيلم Inception، قصة عبقرية وهتشدك جدًا!";
if (text.includes("افضل فيلم")) return "🔥 من أفضل الأفلام: Interstellar و The Dark Knight";
if (text.includes("فيلم اكشن")) return "💥 شوف John Wick، أكشن جامد جدًا!";
if (text.includes("فيلم رعب")) return "😱 جرب The Conjuring لو بتحب الرعب الحقيقي";
if (text.includes("فيلم كوميدي")) return "😂 شوف The Mask، هتموت ضحك!";
if (text.includes("مسلسل حلو")) return "📺 مسلسل Breaking Bad من أقوى المسلسلات";
if (text.includes("انمي كويس")) return "🔥 أنصحك بـ Attack on Titan";
if (text.includes("فيلم حزين")) return "😢 شوف The Pursuit of Happyness";
if (text.includes("فيلم رومانسي")) return "❤️ Titanic من الكلاسيكيات";
if (text.includes("فيلم جديد")) return "🎥 تابع أحدث أفلام Marvel لو بتحب الأكشن";

// ===== أغاني =====
if (text.includes("اغنية حلوة")) return "🎧 اسمع أغنية Shape of You - Ed Sheeran";
if (text.includes("اغاني حزينة")) return "😢 جرب تسمع Adele";
if (text.includes("اغاني حماس")) return "🔥 Eminem هيشحنك طاقة!";
if (text.includes("اغاني رومانسية")) return "❤️ اسمع Ed Sheeran";
if (text.includes("مغني مشهور")) return "🌟 من أشهرهم: Drake و The Weeknd";
if (text.includes("اغاني عربية")) return "🎶 جرب عمرو دياب";
if (text.includes("اغاني اجنبية")) return "🎤 شوف Billie Eilish";
if (text.includes("اغنية قديمة")) return "📻 فيروز كلاسيك جميل";
if (text.includes("اغنية ترند")) return "📈 تابع تيك توك للأغاني الجديدة";
if (text.includes("موسيقى هادية")) return "🌙 Lo-fi beats هتروقك";

// ===== ألعاب =====
if (text.includes("لعبة حلوة")) return "🎮 جرب PUBG أو Call of Duty";
if (text.includes("لعبة موبايل")) return "📱 Free Fire خفيفة وممتعة";
if (text.includes("لعبة كمبيوتر")) return "💻 GTA V اختيار ممتاز";
if (text.includes("لعبة اونلاين")) return "🌐 Fortnite ممتعة جدًا";
if (text.includes("لعبة اوفلاين")) return "🎯 Minecraft رائعة";
if (text.includes("لعبة حرب")) return "💣 Battlefield جامدة";
if (text.includes("لعبة سباق")) return "🏎️ Need for Speed";
if (text.includes("لعبة رعب")) return "😱 Resident Evil";
if (text.includes("تحميل لعبة")) return "⬇️ ادخل Google Play أو Steam";
if (text.includes("لعبة جديدة")) return "🆕 تابع أخبار الألعاب الجديدة على YouTube";

// ===== أكل =====
if (text.includes("وصفة سهلة")) return "🍳 اعمل بيض أومليت بسيط وسريع";
if (text.includes("اكل سريع")) return "🍔 ساندوتش برجر سريع";
if (text.includes("طبخة حلوة")) return "🍲 مكرونة بالبشاميل";
if (text.includes("اكل صحي")) return "🥗 سلطة وتونة اختيار ممتاز";
if (text.includes("حلو سريع")) return "🍫 شوكولاتة مذابة مع فاكهة";
if (text.includes("فطار")) return "🥞 بان كيك أو بيض";
if (text.includes("غدا")) return "🍗 فراخ مشوية مع رز";
if (text.includes("عشا")) return "🥪 ساندوتش خفيف";
if (text.includes("اكل شعبي")) return "🇪🇬 كشري طبعًا!";
if (text.includes("اكل حار")) return "🌶️ جرب أكل مكسيكي";

// ===== كتب =====
if (text.includes("كتاب حلو")) return "📚 جرب رواية The Alchemist";
if (text.includes("رواية رومانسية")) return "❤️ Pride and Prejudice";
if (text.includes("كتاب تطوير")) return "💡 Rich Dad Poor Dad";
if (text.includes("كتاب عربي")) return "📖 روايات أحمد خالد توفيق";
if (text.includes("كتاب انجليزي")) return "📘 Atomic Habits";
if (text.includes("رواية رعب")) return "😱 Dracula";
if (text.includes("كتاب مفيد")) return "📊 Think and Grow Rich";
if (text.includes("كتاب قصير")) return "📕 Animal Farm";
if (text.includes("رواية مشوقة")) return "🔥 Sherlock Holmes";
if (text.includes("اقرأ ايه")) return "📚 ابدأ بحاجة خفيفة زي رواية قصيرة";

// ===== طقس =====
if (text.includes("الجو عامل ايه")) return "🌤️ قولي المكان وأنا أقولك التفاصيل";
if (text.includes("حر ولا برد")) return "🌡️ حسب المكان، قولّي فين";
if (text.includes("هتمطر")) return "🌧️ ممكن، قولّي المدينة";
if (text.includes("درجة الحرارة")) return "🌡️ محتاج أعرف المكان الأول";
if (text.includes("جو النهارده")) return "☀️ قولي مكانك";
if (text.includes("الطقس بكرة")) return "📅 قولي المكان";
if (text.includes("جو القاهرة")) return "🏙️ غالبًا معتدل";
if (text.includes("جو اسكندرية")) return "🌊 لطيف شوية";
if (text.includes("الجو حر")) return "🥵 اشرب مياه كتير";
if (text.includes("الجو برد")) return "🥶 البس تقيل";

// ===== كريبتو =====
if (text.includes("بيتكوين كام")) return "💰 السعر بيتغير، شوف منصة تداول";
if (text.includes("كريبتو ايه")) return "🪙 عملات رقمية زي Bitcoin";
if (text.includes("استثمر ازاي")) return "📊 ابدأ بمبلغ صغير واتعلم";
if (text.includes("افضل عملة")) return "🚀 Bitcoin و Ethereum";
if (text.includes("هل الكريبتو حلال")) return "⚖️ فيه اختلاف، اسأل مختص";
if (text.includes("ربح الكريبتو")) return "💸 ممكن بس فيه مخاطرة";
if (text.includes("شراء عملة")) return "🛒 من Binance أو Coinbase";
if (text.includes("محفظة كريبتو")) return "👛 زي Trust Wallet";
if (text.includes("تعدين")) return "⛏️ محتاج أجهزة قوية";
if (text.includes("سعر ethereum")) return "📈 بيتغير باستمرار";

// ===== نكت =====
if (text.includes("قول نكتة")) return "😂 مرة واحد بخيل وقع منه جنيه... زعل عليه 😆";
if (text.includes("نكتة مضحكة")) return "🤣 مرة واحد راح يشتري عقل… ملقاش مقاسه 😂";
if (text.includes("نكتة جامدة")) return "😆 واحد غبي فتح محل عصير… سماه عصر الجهل 😂";
if (text.includes("نكتة قصيرة")) return "😂 واحد نام متأخر… صحي بدري 😆";
if (text.includes("نكتة مصرية")) return "🇪🇬 واحد صعيدي شاف فيلم رعب… قالهم مش هخاف 😆";
if (text.includes("نكتة جديدة")) return "🆕 واحد دخل امتحان… خرج قالهم الامتحان خرج من المنهج 😂";
if (text.includes("ضحكني")) return "😂 حاضر! مرة واحد نسي نفسه… رجع لقاها 😂";
if (text.includes("نكتة سخيفة")) return "😅 واحد قال نكتة محدش ضحك… زعل لوحده 😂";
if (text.includes("نكتة حلوة")) return "🤣 واحد غبي وقع في حفرة… قال دي حفرة مفاجآت 😂";
if (text.includes("نكتة سريعة")) return "😂 واحد نام في الدرس… صحي لقا نفسه خرج 😂";

// ===== نصائح =====
if (text.includes("نصيحة عامة")) return "💡 خليك دايمًا مستمر حتى لو ببطء";
if (text.includes("نصيحة شغل")) return "💼 اتعلم مهارة جديدة دايمًا";
if (text.includes("نصيحة دراسة")) return "📖 قسم وقتك وراجع أول بأول";
if (text.includes("نصيحة حياة")) return "🌱 اهتم بصحتك ونفسك";
if (text.includes("نصيحة فلوس")) return "💰 وفر جزء من دخلك";
if (text.includes("نصيحة علاقات")) return "❤️ اختار صحابك بعناية";
if (text.includes("نصيحة نجاح")) return "🚀 الفشل خطوة للنجاح";
if (text.includes("نصيحة سريعة")) return "⚡ متأجلش شغلك";
if (text.includes("نصيحة مهمة")) return "🔥 ركز على هدف واحد";
if (text.includes("نصيحة قوية")) return "💪 متستسلمش مهما حصل";
  return null; // لو مفيش رد دردشة
}