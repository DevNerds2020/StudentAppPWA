const exams = [
  {
    id: 1,
    title: 'هفتم',
    description: 'آزمون هفتم',
    time: 600, // minutes
    questions: [
      {
        id: 1,
        title: 'Question 1',
        description:
          'کدام است؟ xوy بر 4و 5و 9 بخش پذیر است جمع ارقام 24x8yعدد پنج رقمی ',
        answers: {
          a: '13',
          b: '10',
          c: '4',
          d: '5',
        },
        correctAnswer: 'c',
      },
      {
        id: 2,
        title: 'Question 2',
        description:
          'باقی مانده تقسیم یک عدد ده رقمی که تمام ارقام ان متفاوت هستند. در تقسیم بر ۹ کدام است؟!',
        answers: {
          a: '0',
          b: '3',
          c: '6',
          d: '8',
        },
        correctAnswer: 'a',
      },
      {
        id: 3,
        title: 'Question 3',
        description: ' کدام گزینه صحیح است؟!  ',
        answers: {
          a: 'مربع لوزی است که قطر هایش باهم مساوی باشند',
          b: 'چهار ضلعی ای که قطر هایش بر هم عمود باشند مربع است',
          c: '-متوازی الاضلاعی که قطر هایش بر هم عمود باشند مربع است',
          d: 'هر ذوزنقه که یک زاویه قائمه داشته باشد مربع است',
        },
        correctAnswer: 'a',
      },
      {
        id: 4,
        title: 'Question 4',
        description: 'برابر است با:  x=-2به ازای2(x-3)(2x+1)عبارت',
        answers: {
          a: '-30',
          b: '-5',
          c: '-10',
          d: '30',
        },
        correctAnswer: 'd',
      },
      {
        id: 5,
        title: 'Question 5',
        description:
          ' اگر به عددی  دو واحد اضافه شود به مجذور آن ۳۶واحد اضافه میشود ان عدد کدام است؟! ',
        answers: {
          a: '9',
          b: '8',
          c: '10',
          d: '11',
        },
        correctAnswer: 'b',
      },
      {
        id: 6,
        title: 'Question 6',
        description:
          'دو دایره باهم مماس خارجی اند. کدام گزینه نمی‌تواند نقاط برخورد یک خط راست با این دو دایره باشد؟!',
        answers: {
          a: '0',
          b: '2',
          c: '4',
          d: '5',
        },
        correctAnswer: 'd',
      },
      {
        id: 7,
        title: 'Question 7',
        description: 'سمت دیگر برابری باید چه عددی بنشیند؟-18÷2-9+7×(-3)=?',
        answers: {
          a: '39',
          b: '33',
          c: '-39',
          d: '-33',
        },
        correctAnswer: 'c',
      },
      {
        id: 8,
        title: 'Question 8',
        description: 'حاصل عبارت 25-37+42- برابر است با: ',
        answers: {
          a: '-30',
          b: '30',
          c: '104',
          d: '-104',
        },
        correctAnswer: 'a',
      },
      {
        id: 9,
        title: 'Question 9',
        description: ' برابر است با: 1+2+3+…….+98+99+100حاصل',
        answers: {
          a: '101',
          b: '50',
          c: '5050',
          d: '1010',
        },
        correctAnswer: 'c',
      },
      {
        id: 10,
        title: 'Question 10',
        description:
          'در عبارت زیر در جاهای خالی علامت + یا - قرار می دهیم به طوری که حاصل عبارت بزرگ ترین مقدار ممکن شود. در این صوررت بیش ترین مقدار ممکن کدام گزینه است؟ -17∎(-19)∎(+30)∎(-28)',
        answers: {
          a: '22',
          b: '60',
          c: '94',
          d: '40',
        },
        correctAnswer: 'b',
      },
      {
        id: 11,
        title: 'Question 11',
        description: 'چند عدد گویا وجود دارد که با معکوسش برابر باشد؟! ',
        answers: {
          a: 'چنین عددی وجود ندارد',
          b: ' یکی تا',
          c: ' دوتا',
          d: 'بی شمار',
        },
        correctAnswer: 'b',
      },
      {
        id: 12,
        title: 'Question 12',
        description:
          'اگر به صورت و مخرج کسری عددی طبیعی اضافه کنیم مقدار کسر چه تغییری می‌کند ؟!',
        answers: {
          a: 'زیاد میشود',
          b: 'کم میشود',
          c: 'تغییر نمیکند',
          d: 'هر سه مورد میتواند اتفاق بیفتد',
        },
        correctAnswer: 'd',
      },
      {
        id: 13,
        title: 'Question 13',
        description:
          'یک عدد چهار رقمی را دوبار پشت سر هم مینویسیم عدد حاصل به طور حتم بر چه عددی بخش پذیر است؟!',
        answers: {
          a: '11',
          b: '13',
          c: '43',
          d: '73 ',
        },
        correctAnswer: 'd',
      },
      {
        id: 14,
        title: 'Question 14',
        description: 'کدام چند ضلعی دارای 14 قطر است؟',
        answers: {
          a: 'شش ضلعی',
          b: 'هفت ضلعی',
          c: 'هشت ضلعی',
          d: 'نه ضلعی',
        },
        correctAnswer: 'b',
      },
      {
        id: 15,
        title: 'Question 15',
        description: 'اگر اضلاع دو زاویه بر هم عمود باشند این دو زاویه:',
        answers: {
          a: 'برابرند',
          b: 'متمم اند',
          c: 'مکمل اند',
          d: 'گزینه 1 یا 3',
        },
        correctAnswer: 'd',
      },
      {
        id: 16,
        title: 'Question 16',
        description: ' برابر 3 است؟ax+5=20  جواب معادله ی aبه ازای چه مقدار',
        answers: {
          a: '-5',
          b: '5',
          c: '-8/3',
          d: '8/3',
        },
        correctAnswer: 'b',
      },
      {
        id: 17,
        title: 'Question 17',
        description:
          'نقاط (0و0)،(0و2)،(1و3)،(3و3)،(3و5) را روی صفحه مختصات در نظر گرفتیم چند جفت خط موازی وجود دارند که هر کدام از خط هایشان دست کم از دو نقطه از این مجموعه بگذرند؟! ',
        answers: {
          a: '1',
          b: '2',
          c: '3',
          d: 'بیشمار',
        },
        correctAnswer: 'c',
      },
      {
        id: 18,
        title: 'Question 18',
        description:
          'راننده ای با اتومبیل خود از شهر a حرکت کرد ، پس از ۱۰ کیلومتر به طرف شرق ، ۸ کیلومتر به طرف شمال و ۴ کیلومتر به طرف غرب حرکت کرد تا به شهر b رسید. فاصله دو شهر a و b به طور مستقیم چند کیلومتر بوده است؟!',
        answers: {
          a: ' 9km',
          b: ' 8km',
          c: '10km',
          d: ' 7km',
        },
        correctAnswer: 'c',
      },
      {
        id: 19,
        title: 'Question 19',
        description: 'کدام جفت عدد ها نسبت به هم اول هستند؟!',
        answers: {
          a: '(۲۵و۱۰)',
          b: '(۱۴و۴)  ',
          c: '(۱۶و۵)',
          d: '(۲۱و ۷)',
        },
        correctAnswer: 'c',
      },
      {
        id: 20,
        title: 'Question 20',
        description:
          'مجموع ارقام بزرگترین عدد تقریبا اول سه رقمی که بر ۲۴۷ بخش پذیر است کدام است؟! ',
        answers: {
          a: '12',
          b: '13',
          c: '25',
          d: '17',
        },
        correctAnswer: 'b',
      },
      {
        id: 21,
        title: 'Question 21',
        description:
          'در غربال اراتستن برای یافتن اعداد اول 1 تا 300 کدام یک دیرتر خط میخورد؟! ',
        answers: {
          a: '203',
          b: '265',
          c: '177',
          d: '298',
        },
        correctAnswer: 'a',
      },
      {
        id: 22,
        title: 'Question 22',
        description: 'حاصل عبارت مقابل کدام است؟2-1×(1-(9-8)',
        answers: {
          a: '-3',
          b: '3',
          c: '1',
          d: '-2',
        },
        correctAnswer: 'a',
      },
      {
        id: 23,
        title: 'Question 23',
        description: 'قرینه عدد7- نسبت به 2 کدام است؟',
        answers: {
          a: '8',
          b: '7',
          c: '10',
          d: '11',
        },
        correctAnswer: 'd',
      },
      {
        id: 24,
        title: 'Question 24',
        description:
          'اعداد طبیعی یک تا ده را روی تخته مینویسیم هر بار یک دانش اموز پای تخته می اید دو عدد دلخواه را جمع زده منهای یک میکند و روی تخته مینویسد(2 عدد را پاک میکند)پس از چند مرحله فقط یک عدد روی تخته میماندان عدد کدام است؟',
        answers: {
          a: '1387',
          b: '2008',
          c: '-2008',
          d: '-1387',
        },
        correctAnswer: 'a',
      },
    ],
  },
  {
    id: 2,
    title: 'هشتم',
    description: 'آزمون هشتنم',
    time: 30, // minutes
    questions: [
      {
        id: 1,
        title: 'Question 1',
        description:
          'ساختمانی 10 طبقه بالای همکف و 4 طبقه پارکینگ زیر همکف دارد. مهسا در طبقه ششم ساختمان و دینا در دومین طبقه ی پارکینگ است. مهسا و دینا چند طبقه فاصله دارند',
        answers: {
          a: '8',
          b: '4',
          c: '9',
          d: '7',
        },
        correctAnswer: 'a',
      },
      {
        id: 2,
        title: 'Question 2',
        description:
          'مجموع متمم زاویه ی 2۵ درجه و مکمل زاویه ی 12۵ درجه چند می شود؟ ',
        answers: {
          a: 'درجه120',
          b: 'درجه90',
          c: 'درجه180',
          d: 'درجه150',
        },
        correctAnswer: 'a',
      },
      {
        Id: 3,
        title: 'Question 3',
        description: 'در الگوی زیر عدد بعد از ۳۱ کدام است؟   ....1,3,7,15,31',
        answers: {
          a: '78',
          b: '68',
          c: '63',
          d: '59',
        },
        correctAnswer: 'c',
      },
      {
        id: 4,
        title: 'Question 4',
        description: 'عدد 12 شمارنده ی کدام یک از اعداد زیر است؟',
        answers: {
          a: '110',
          b: '60',
          c: '200',
          d: '430',
        },
        correctAnswer: 'b',
      },
      {
        id: 5,
        title: 'Question 5',
        description: 'جمله هفتم در دنباله 3-8n برابر است با ',
        answers: {
          a: '53',
          b: '43',
          c: '63',
          d: '33',
        },
        correctAnswer: 'a',
      },
      {
        id: 6,
        title: 'Question 6',
        description: 'حاصل عبارت3*20+10-برابر است با:',
        answers: {
          a: '60-',
          b: '50',
          c: '30',
          d: '40',
        },
        correctAnswer: 'b',
      },
      {
        id: 7,
        title: 'Question 7',
        description:
          'اگر روی یک خط 6 نقطه مشخص شده باشد ، تعداد نیم خط ها برابر است با:',
        answers: {
          a: '10',
          b: '12',
          c: '14',
          d: '16',
        },
        correctAnswer: 'b',
      },
      {
        title: 'Question 8',
        description:
          'عبارت " 5 واحد بیشتر از 3 برابر یک عدد" برابر کدام گزینه است؟',
        answers: {
          a: '5x+3',
          b: '3x+5',
          c: 'x+5',
          d: 'x+3',
        },
        correctAnswer: 'b',
      },
      {
        Id: 9,
        title: 'Question 9',
        description: 'کدام یک از اعداد زیر اول است؟!',
        answers: {
          a: '15',
          b: '21',
          c: '31',
          d: '51',
        },
        correctAnswer: 'c',
      },
      {
        Id: 10,
        title: 'Question 10',
        description:
          'با توجه به رابطه مقابل کدا گزینه نتیجه خواهد بود ؟b=a      a>c',
        answers: {
          a: 'a=c',
          b: 'b=c',
          c: 'b>c',
          d: 'c>b',
        },
        correctAnswer: 'c',
      },
      {
        Id: 11,
        title: 'Question 11',
        description: 'با انگشتان یک دست به چند روش میتوان عدد دو را نشان داد؟ ',
        answers: {
          a: '4',
          b: '7',
          c: '9',
          d: '10',
        },
        correctAnswer: 'd',
      },
      {
        Id: 12,
        title: 'Question12',
        description:
          'اگر حاصل ضرب دو عدد صحیح مثبت شود ، کدام گزینه صحیح نیست ؟ ',
        answers: {
          a: 'هر دو عدد منفی بوده اند',
          b: 'آن دو عدد هم علامت بوده اند',
          c: 'هر دو عدد مثبت بوده اند ',
          d: 'آن دو عدد هم عالمت نبوده اند',
        },
        correctAnswer: 'd',
      },
      {
        Id: 13,
        title: 'Question 13',
        description: 'کدام گزینه یک سه ضلعی منتظم است ؟',
        answers: {
          a: 'مثلث متساوی الساقین.',
          b: 'مثلث قائم الزاویه',
          c: 'مربع',
          d: 'مثلث متساوی االضالع',
        },
        correctAnswer: 'd',
      },
      {
        id: 14,
        title: 'Question 14',
        description: 'کدام گزینه صحیح نیست ؟',
        answers: {
          a: 'تقارن اندازه را تغییر نمی دهد',
          b: 'انتقال اندازه را تغییر نمی دهد',
          c: 'انتقال جهت را تغییر نمی دهد',
          d: 'دوران یک تبدیل هندسی نیست',
        },
        correctAnswer: 'd',
      },
      {
        id: 15,
        title: 'Question 15',
        description:
          'اگر چند تبدیل هندسی را روی یک چندضلعی انجام دهیم، کدام گزینه ممکن است تغییر کند ؟ ',
        answers: {
          a: 'محیط',
          b: 'طول اضلاع',
          c: 'مساحت ',
          d: ' جهت',
        },
        correctAnswer: 'd',
      },
      {
        id: 16,
        title: 'Question 16',
        description: 'میانگین اعداد 4 + و 12 -در کدام گزینه آمده است ؟ ',
        answers: {
          a: '-4',
          b: '-8',
          c: '4',
          d: '10',
        },
        correctAnswer: 'a',
      },
      {
        id: 17,
        title: 'Question 17',
        description: 'در کدام حالت نمی توان یک مثلث رسم کرد ؟',
        answers: {
          a: 'یک زاویه باز و یک زاویه قائمه',
          b: 'یک زاویه تند و یک زاویه باز ',
          c: 'یک زاویه تند و یک زاویه قائمه',
          d: 'گزینه های الف و ج',
        },
        correctAnswer: 'a',
      },
      {
        id: 18,
        title: 'Question 18',
        description:
          ' با انگشتان یک دست، به چند صورت می توان عدد 1 را نشان داد ؟',
        answers: {
          a: ' 5',
          b: '1',
          c: '10',
          d: ' 4',
        },
        correctAnswer: 'a',
      },
      {
        id: 19,
        title: 'Question 19',
        description:
          ' اگر روی یک خط 6 نقطه قرار دهیم ، چند نی م خط بوجود می آید ؟',
        answers: {
          a: '6',
          b: '18',
          c: '12',
          d: 'بستگی دارد ',
        },
        correctAnswer: 'c',
      },
      {
        id: 20,
        title: 'Question 20',
        description:
          ' قورباغه ای می خواهد از یک دیوار عمودی باال برود. او با هر جهش 3 متر بالا می رود و هر بار 1 متر سُر می خورد و پایین می آید. اگر ارتفاع دیوار 9 متر باشد، او با چند جهش به بالای دیوار می رسد؟ ',
        answers: {
          a: '5',
          b: '4',
          c: '3',
          d: '6',
        },
        correctAnswer: 'b',
      },
      {
        id: 21,
        title: 'Question 21',
        description: ' کدام یک از عبارتهای جبری زیر، ساده نمیشود؟',
        answers: {
          a: ' 3x-7y+x',
          b: ' 3x+5',
          c: ' -7x+5+3',
          d: ' 6x-9-x',
        },
        correctAnswer: 'b',
      },
      {
        id: 22,
        title: 'Question 22',
        description: ' مقدار عددی عبارت m×m به‌ازای  m=–3 برابر با کدام است؟',
        answers: {
          a: '6',
          b: '-6',
          c: '9',
          d: '-9',
        },
        correctAnswer: 'c',
      },
      {
        id: 23,
        title: 'Question 23',
        description:
          ' دانش‌آموزی با پول توجیبی 3 روز خود، یک کتاب خرید به قیمت 15 تومان و 3 تومان هم برایشان باقی‌ماند. این دانش‌آموز چقدر پول توجیبی از پدرش می‌گیرد؟',
        answers: {
          a: '8',
          b: '7',
          c: '6',
          d: '5',
        },
        correctAnswer: 'c',
      },
      {
        id: 24,
        title: 'Question 24',
        description:
          ' عرفان هر هفته 4000 تومان پس اندازمی کند. او حساب کرد بعد از 7 هفته پس انداز، برای خرید اسباب بازی مورد علاقه اش هنوز 2000 تومان کم دارد. قیمت اسباب بازی چند تومان است؟',
        answers: {
          a: '28000',
          b: '30000',
          c: '32000',
          d: '34000',
        },
        correctAnswer: 'b',
      },
      {
        id: 25,
        title: 'Question 25',
        description:
          ' مجموع ربع ، ثلث و نصف عددی 2 واحد بیش‌تر از خود عدد است. آن عدد کدام است؟',
        answers: {
          a: '23',
          b: '24',
          c: '25',
          d: '27',
        },
        correctAnswer: 'b',
      },
      {
        id: 26,
        title: 'Question 26',
        description:
          'یک ماشین عدد ساز به شکل زیر عمل میکند که ابتدا عدد وارد شده را سه برابر کرده و سپس هفت واحد به ان اضافه میکند اگر خروجی ماشین یک باشد ورودی ان به کدام گزینه نزدیک تر است؟ ',
        answers: {
          a: '1',
          b: '5',
          c: '-1',
          d: '-5',
        },
        correctAnswer: 'c',
      },
      {
        id: 27,
        title: 'Question 27',
        description: ' برابر است با:2(x-y)عبارت جبری ',
        answers: {
          a: 'x-2y',
          b: '2x-y',
          c: '2x-2y',
          d: '2x+2y',
        },
        correctAnswer: 'c',
      },
      {
        id: 28,
        title: 'Question 28',
        description: ' کدام است؟ 2x-3=-7جواب معادله ی',
        answers: {
          a: '-2',
          b: '5',
          c: '2',
          d: '-5',
        },
        correctAnswer: 'a',
      },
      {
        id: 29,
        title: 'Question 29',
        description:
          ' از هفت برابر عددی ده تا کم کردیم حاصل عدد سی و دو به دست امده است عدد چند است؟ ',
        answers: {
          a: '6',
          b: '-6',
          c: '22',
          d: '42',
        },
        correctAnswer: 'b',
      },
      {
        id: 30,
        title: 'Question 30',
        description: 'به ازای 10- برابر است با: 5x-21عبارت ',
        answers: {
          a: '-71',
          b: '29',
          c: '71',
          d: '-71',
        },
        correctAnswer: 'a',
      },
    ],
  },
  {
    id: 3,
    title: 'نهم',
    description: 'آزمون نهم',
    time: 30, // minutes
    questions: [
      {
        id: 1,
        title: 'Question 1',
        description: '……نماد علمی عدد 1401 برابر است با',
        answers: {
          a: '14×10^3',
          b: '14×10^(-3)',
          c: '1/401×10^3',
          d: '1/401×10^(-3)',
        },
        correctAnswer: 'c',
      },
      {
        id: 2,
        title: 'Question 2',
        description: 'کدام یک از عبارت های زیر گویا نیست؟',
        answers: {
          a: '5',
          b: '3x^2',
          c: '9',
          d: '1/√x',
        },
        correctAnswer: 'd',
      },
      {
        id: 3,
        title: 'Question 3',
        description: ' با کدام گزینه برابر است؟ 〖(-2)〗^(-2) عبارت ',
        answers: {
          a: '1/(-4)',
          b: '4',
          c: '-4',
          d: '1/4',
        },
        correctAnswer: 'd',
      },
      {
        id: 4,
        title: 'Question 4',
        description: 'کدام گزینه از بقیه بزرگتر است؟',
        answers: {
          a: '〖(-2)〗^(-3)',
          b: '〖(-2)〗^3',
          c: '(〖(-1)/2)〗^(-4)',
          d: '(〖(-1)/2)〗^4',
        },
        correctAnswer: 'c',
      },
      {
        id: 5,
        title: 'Question 5',
        description:
          ' چقدر است؟(y)متغیر به نسبت10x^7 y^3+2x^4 y^2-7x^3 y^5 عبارت درجه',
        answers: {
          a: '5',
          b: '8',
          c: '10',
          d: '7',
        },
        correctAnswer: 'a',
      },
      {
        id: 6,
        title: 'Question 6',
        description:
          ' کدام گزینه است؟ √(a^2 )+√(b^2 )    حاصل باشد و منفی a مثبت وb اگر',
        answers: {
          a: 'a-b',
          b: 'a+b',
          c: '-a+b',
          d: '-a-b',
        },
        correctAnswer: 'c',
      },
      {
        id: 7,
        title: 'Question 7',
        description: 'یک مجموعه هشت عضوی چند زیر مجموعه چهار عضوی دارد؟',
        answers: {
          a: '84',
          b: '70',
          c: '42',
          d: 'نمیتوان مشخص کرد',
        },
        correctAnswer: 'b',
      },
      {
        id: 8,
        title: 'Question 8',
        description:
          'اگر به عضو های یک مجموعه سه عضو اضافه شود تعداد زیر مجموعه های ان چند برابر میشود',
        answers: {
          a: '2',
          b: '3',
          c: '8',
          d: '16',
        },
        correctAnswer: 'c',
      },
      {
        id: 9,
        title: 'Question 9',
        description:
          'بین یک تا 2000 چند عدد صحیح وجود دارد که مضرب 11باشد ولی مضرب3 نباشد؟',
        answers: {
          a: '121',
          b: '122',
          c: '120',
          d: '123',
        },
        correctAnswer: 'a',
      },
      {
        id: 10,
        title: 'Question 10',
        description: 'کدام یک از گزینه های زیر درست است ؟',
        answers: {
          a: 'مجموعه اعداد گویا و مجموعه اعدادی که از تقسیم یک عدد طبیعی بر یک عدد صحیح بدست می ایند باهم برابرند',
          b: 'تعداد اعضای مجموعه اعداد اول کوچکتر از 10 با تعداد اعضای مجموعه اعداد طبیعی کوچکتر از 5 برابر است ',
          c: 'مجموعه حروف کلمه (امینی) و مجموعه حروف کلمه ( نیما) برابرند',
          d: 'مجموعه دختر خاله های دو پسرخاله باهم برابر هستند',
        },
        correctAnswer: 'b',
      },
      {
        id: 11,
        title: 'Question 11',
        description:
          'عضوی برابر 32 است این مجموعه چند عضو دارد؟2n-1تعداد زیر مجموعه های یک مجموعه',
        answers: {
          a: '5',
          b: ' 2',
          c: ' 3',
          d: '32',
        },
        correctAnswer: 'a',
      },
      {
        id: 12,
        title: 'Question 12',
        description: 'کدام یک از عبارت های گویای زیر قابل ساده شدن است؟',
        answers: {
          a: '(3-x)/(3-y)',
          b: 'a^(2+5)/a',
          c: '(2x^2-16)/x^(2-4) ',
          d: '(4+x^2-4x)/(-2+x)',
        },
        correctAnswer: 'd',
      },
      {
        id: 13,
        title: 'Question 13',
        description: 'در کدام گزینه شیب خط با بقیه گزینه ها متفاوت است؟',
        answers: {
          a: '6x=2+y',
          b: '2y=6x-2',
          c: '3ax-a/2 y=3',
          d: 'میگذرد[■(2@-1)]و[■(3@5)]خطی که از دو نقطه ',
        },
        correctAnswer: 'b',
      },
      {
        id: 14,
        title: 'Question 14',
        description:
          'محیط یک مستطیل 82 واحد است اگر عرض این مستطیل 7 واحد کمتر از طول ان باشد ضلع کوچکتر این مستطیل کدام است؟',
        answers: {
          a: '16',
          b: '17',
          c: '18',
          d: '19',
        },
        correctAnswer: 'b',
      },
      {
        id: 15,
        title: 'Question 15',
        description: 'حاصل کدام گزینه عبارتی منفی است؟',
        answers: {
          a: '(〖-0/2)〗^(-2)',
          b: '-〖(-2)〗^(-3)',
          c: '-〖(-2)〗^(-2)',
          d: '-(〖-3)〗^(-1)',
        },
        correctAnswer: 'c',
      },
      {
        id: 16,
        title: 'Question 16',
        description: 'نماد علمی 7800000کدام گزینه است؟',
        answers: {
          a: '78×10^5',
          b: '7/8×10^(-4)',
          c: '7/8〖×10〗^(-6)',
          d: '7/8×10^6',
        },
        correctAnswer: 'd',
      },
      {
        id: 17,
        title: 'Question 17',
        description:
          'در بین اعداد طبیعی چهار رقمی چند عدد مربع کامل وجود دارد؟',
        answers: {
          a: '67',
          b: '68',
          c: '69',
          d: '70',
        },
        correctAnswer: 'b',
      },
      {
        id: 18,
        title: 'Question 18',
        description:
          'چند مجموعه سه عضوی وجود دارد که هر مجموعه ان زیر مجموعه ان نیز باشد؟',
        answers: {
          a: ' 1',
          b: ' 2',
          c: '8',
          d: ' 4',
        },
        correctAnswer: 'b',
      },
      {
        id: 19,
        title: 'Question 19',
        description:
          'اگر در پرتاپ یک تاس بدانیم که عدد رو شده شمارنده عدد6 نمیباشد در این صورت تعداد کل پیشامد ها برابر است با:',
        answers: {
          a: '2',
          b: '4',
          c: '6',
          d: '8',
        },
        correctAnswer: 'b',
      },
      {
        id: 20,
        title: 'Question 20',
        description:
          'مروز 30/11/97 است اگر رقم های مورد نیاز برای نوشتن تاریخ امروز را در یک مجموعه بنویسیم انگاه این مجموعه چند عضو دارد؟',
        answers: {
          a: '4',
          b: '5',
          c: '7',
          d: '8',
        },
        correctAnswer: 'b',
      },
      {
        id: 21,
        title: 'Question 21',
        description:
          'از یک تا100 تعداد 25 عدد اول وجود دارد از یک تا 100 چند عدد مرکب وجود دارد؟',
        answers: {
          a: '75',
          b: '74',
          c: '73',
          d: '72',
        },
        correctAnswer: 'b',
      },
      {
        id: 22,
        title: 'Question 22',
        description: 'مجموعه اعداد صحیح زوج یک رقمی چند عضو دارد؟',
        answers: {
          a: '5',
          b: '4',
          c: '8',
          d: '9',
        },
        correctAnswer: 'd',
      },
      {
        id: 23,
        title: 'Question 23',
        description: 'اگر دو .چند ضلعی متشابه باشند همواره:',
        answers: {
          a: 'زاویه ها و ضلع هایشان به یک نسبت تغییر میکند',
          b: 'زاویه ها باهم مساوی اند',
          c: 'ضلع ها متناسب اند',
          d: 'گزینه های 2و3',
        },
        correctAnswer: 'd',
      },
      {
        id: 24,
        title: 'Question 24',
        description: 'کدام یک از کسرهای زیر متناوب اند؟',
        answers: {
          a: '7/20',
          b: '4/35',
          c: '7/25',
          d: '7/16',
        },
        correctAnswer: 'b',
      },
      {
        id: 25,
        title: 'Question 25',
        description: ' چند رقمی است؟8^7×25^8 عدد',
        answers: {
          a: '11',
          b: '15',
          c: '16',
          d: '18',
        },
        correctAnswer: 'd',
      },
      {
        id: 26,
        title: 'Question 26',
        description: '؟ است کدام 2/∛9 کسر ی شده گویا ',
        answers: {
          a: '2∛3',
          b: '2/3 ∛9',
          c: '∛(9^2 )',
          d: '2/3 ∛3',
        },
        correctAnswer: 'd',
      },
      {
        id: 27,
        title: 'Question 27',
        description: ' ندارد؟ وجود عامل کدامx^4-2x^3-x^2+2xعبارت تجزیه در ',
        answers: {
          a: 'x-2',
          b: 'x+2',
          c: 'x',
          d: 'x-1',
        },
        correctAnswer: 'b',
      },
      {
        id: 28,
        title: 'Question 28',
        description: ' کدام است؟ 0/00029نماد علمی ',
        answers: {
          a: '2/9×10^(-4)',
          b: '29×10^(-4)',
          c: '2/9×10^4',
          d: '29×10^4',
        },
        correctAnswer: 'a',
      },
      {
        id: 29,
        title: 'Question 29',
        description:
          'شیب خطی 2- است اگر به طول هر نقطه روی این خط 3 واحد اضافه کنیم به عرض انها چند واحد اضافه میشود تا نقاط حاصل نیز روی همین خط قرار گیرند؟',
        answers: {
          a: ' 1',
          b: '-1',
          c: '6',
          d: '-6',
        },
        correctAnswer: 'd',
      },
      {
        id: 30,
        title: 'Question 30',
        description: '؟ است کدام A=1/(1-x)+1/(1-1/x) حاصل ',
        answers: {
          a: '-x',
          b: '(1-x)/(1+x)',
          c: 'x',
          d: '1',
        },
        correctAnswer: 'd',
      },
    ],
  },
];

export default exams;
