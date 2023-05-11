import {
  BoltIcon,
  SunIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="bg-gptbgl h-screen text-offwhite overflow-y-auto ">
      <div className="mb-12">
        {/* Main header */}
        <div className="text-center pt-44 font-semibold pb-10">
          <p>تحدث مع الذكاء الإصطناعي</p>
          <h1 className="text-3xl font-sans font-bold">ChatGPT</h1>
        </div>

        {/* first info segment */}

        <div className="md:grid grid-cols-3 gap-6 mx-16">
          <div className="pb-5 ">
            {/* Icons */}
            <div className="flex gap-2 px-2 justify-center pb-4">
              <SunIcon className="h-7 w-7" />
              <p className="text-xl">أمثلة</p>
            </div>

            {/* prompts */}
            <div className="">
              <p className="infoText hover:bg-gray-900 cursor-pointer ">
                "إشرح لي مفهوم الحوسبة الذرية بطريقة بسيطة" ←
              </p>
              <p className="infoText hover:bg-gray-900 cursor-pointer">
                "لديك أفكار إبداعية لعيد ميلاد طفل عمره عشرة؟" ←
              </p>
              <p className="infoText hover:bg-gray-900 cursor-pointer">
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
              <p className="infoText ">يتذكر ما قلته له سابقا في المحادثة</p>
              <p className="infoText">يسمح للمستخدم بتصحيحه عندما يخطيء</p>
              <p className="infoText">مدرب لعدم تقديم أجوبة غير لائقة</p>
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
              <p className="infoText">معرفته محدودة بأحداث العالم بعد ٢٠٢١ </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
