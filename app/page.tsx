import {
  BoltIcon,
  SunIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="bg-gptbgl h-screen content-center text-offwhite overflow-y-auto flex flex-col items-center text-sm dark:bg-netural-800">
      <div className="mb-12">
        {/* Main header */}
        <div className="text-center pt-44 font-semibold pb-10">
          <p>تحدث مع الذكاء الإصطناعي</p>
          <h1 className="text-3xl font-sans font-bold">ChatGPT</h1>
        </div>

        <div className="md:flex items-center text-center gap-3.5">
          {/* first info segment */}
          <div className="pb-5 ">
            {/* Icons */}
            <div className="flex gap-2 px-2 justify-center pb-4">
              <SunIcon className="h-7 w-7" />
              <p className="text-xl">أمثلة</p>
            </div>

            {/* prompts */}
            <div className=" content-center">
              <p className="infoText align-middle hover:bg-neutral-900 cursor-pointer ">
                "إشرح لي مفهوم الحوسبة الذرية بطريقة بسيطة" ←
              </p>
              <p className="infoText hover:bg-neutral-900 cursor-pointer">
                "لديك أفكار إبداعية لعيد ميلاد طفل عمره عشرة؟" ←
              </p>
              <p className="infoText hover:bg-neutral-900 cursor-pointer">
                "كيف أبدأ بتعلم برمجة تطبيقات الموبايل؟" ←
              </p>
            </div>
          </div>

          {/* Second info segment */}

          <div className="pb-5">
            {/* Icons */}
            <div className="flex gap-2 px-2 justify-center pb-4">
              <BoltIcon className="h-7 w-7" />
              <p className="text-xl">إمكانياته</p>
            </div>

            {/* prompts */}
            <div className="">
              <p className="infoText ">
                يملك القدرة على تذكر ما اخبر به سابقا في المحادثة
              </p>
              <p className="infoText">يسمح للمستخدم بتصحيحه عندما يخطيء</p>
              <p className="infoText">
                مدرب لعدم الإجابة على الطلبات الغير أخلاقية
              </p>
            </div>
          </div>

          {/* Third info segment */}

          <div className="pb-5">
            {/* Icons */}
            <div className="flex gap-2 px-2 justify-center pb-4">
              <ExclamationTriangleIcon className="h-7 w-7" />
              <p className="text-xl">حدوده</p>
            </div>

            {/* prompts */}
            <div className="">
              <p className="infoText ">قد يعطي معلومات خاطئة أحيانا</p>
              <p className="infoText">
                قد يعطي معلومات لأمور مؤذية و يقدم محتوى منحاز أحيانا
              </p>
              <p className="infoText">
                معرفته محدودة بأحداث العالم بعد العام ٢٠٢١ ميلادي{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
