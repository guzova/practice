var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('index.html');
});

app.get('/articles', function (req, res) {
    res.send(articles);
});

app.get('/article/:id', function (req, res) {
    res.send(articles.find(function (item) {
        return item.id === req.params.id;
    }))
});

app.post('/articles', function (req, res) {
    var article = {
        id: new Date(),
        title: req.body.title,
        summary: req.body.summary,
        createdAt: new Date(),
        author: req.body.author,
        image: req.body.image,
        tags: req.body.tags,
        content: req.body.content
    };
    articles.push(article);
    res.sendStatus(200);
});

app.put('/article/:id', function (req, res) {
    var index = articles.findIndex(function (item) {
        return req.params.id === item.id;
    });
    if (index === -1) {
        res.sendStatus(400);
    }
    if (req.body.title) {
        articles[index].title = req.body.title;
    }
    if (req.body.summary) {
        articles[index].summary = req.body.summary;
    }
    if (req.body.image) {
        articles[index].image = req.body.image;
    }
    if (req.body.content) {
        articles[index].content = req.body.content;
    }
    if (req.body.tags) {
        articles[index].tags = req.body.tags;
    }
    res.sendStatus(200);
});

app.delete('/article/:id', function (req, res) {
    var index = articles.findIndex(function (item) {
        return item.id === req.params.id;
    });
    if (index === -1) {
        res.sendStatus(400);
    } else {
        articles.splice(index, 1);
        res.sendStatus(200);
    }
});
app.listen(7000, function() {
    console.log('Example app listening on port 7000!')
});

var articles = [{
    "id": "1",
    "title": "Всплеск эмоций в полете танца: чувственные рисунки прекрасных балерин",
    "summary": "Искусство — самый идеальный способ выразить свои эмоции. Ведь иногда мы не можем сказать словами то, что мы чувствуем. ",
    "createdAt": "2017-03-23T13:40:22.986Z",
    "author": "Ilya",
    "content": "Искусство — самый идеальный способ выразить свои эмоции. Ведь иногда мы не можем сказать словами то, что мы чувствуем. \n\nНесмотря на то, что мы все такие разные, мы еще и очень похожи. У всех бывают страхи, печали, проблемы и переживания. Но пока вы можете выплеснуть свои эмоции, рассказать о них миру, не все еще потеряно. Не нужно быть суперталантливым, чтобы творить. Просто наслаждайтесь самим процессом. \n\nСегодня мы хотим, чтобы вы взглянули на работы Марты Грахам, на то, как она выражает свое мироощущение посредством рисунка, изображая балерин в танце и их эмоции.",
    "tags": ["nice"],
    "image": "https://img-s3.onedio.com/id-58d26282484057010f9de64c/rev-0/w-635/listing/f-jpg-webp/s-d16df6a332e05c99fd3e11367ac5b85a7275f85b.webp"
}, {
    "id": "2",
    "title": "То, как ты относишься к жизни, либо продлевает ее, либо укорачивает.",
    "summary": " Накануне  приезда в Минск Раиса Рязанова дала эксклюзивное интервью для LADY. О весне, о любви, любимых ролях и вечных ценностях мы беседуем сегодня с Раисой Рязановой.\n",
    "createdAt": "2017-03-23T13:59:39.983Z",
    "author": "dashulia_guzova",
    "content": "— Я с нетерпением жду встречи с Минском и минчанами. Мне уже доводилось бывать и в столице Беларуси, и в городе Бресте. От республики у меня остались самые теплые воспоминания.\nМинск… Было ощущение, что приехала в самый чистый город на земле. Меня поразили аккуратность, просторные широкие улицы и отношению людей к своему городу. В Москве всегда проблема с парковками. На мой вопрос, где же машины ставят минчане, мне рассказали, что у вас такой проблемы нет — существуют правила, и их стараются выполнять все.\n— От Минска ждете новых эмоций, весны?\n— И весны, и встречи со зрителями, конечно, жду. Мне Минск еще запомнился особым теплом — у вас всегда такой дружеский прием: много цветов, подарочки маленькие приносят зрители. Это не совсем обычно для нас, актеров, но чрезвычайно приятно.\n— Раиса Ивановна, на вашем счету сотни великолепно сыгранных ролей. Говорят, что все маленькие девочки мечтают стать актрисами, повторяя и копируя героинь известных фильмов. Стать актрисой — ваша детская мечта?\n— Да нет, не было у меня такой мечты… И не могло ее быть у простой девочки (с улыбкой). Всего лишь случай и первая любовь сыграли роль в моей жизни. Я окончила Рязанское музыкальное училище и начала преподавать в Доме учителя. Напротив располагалась библиотека. Мы с библиотекаршей подружились, она была немного постарше, но одного века со мной человек. Библиотекарь мне давала почитать журнал «Советский экран». Всегда свежий, с пылу с жару… Однажды прочла там статью об актерской профессии, она меня так выбила эта статья, что я решила: обязательно попробую. А тут еще попала в Рязанский драмтеатр, на «Ромео и Джульетту». И влюбилась…",
    "tags": ["life"],
    "image": "https://img.tyt.by/620x620s/n/lady.tut.by/00/d/larisaryazanova_004.jpg"
}, {
    "id": "3",
    "title": "Black tie – строчка в пригласительном или регламент",
    "summary": "Мы решили пофантазировать, что можно надеть на пафосный гала-ужин от итальянских поваров с тремя звездами Miсhelin и заглянули в сервис аренды вечерних платьев Oh My Look!",
    "createdAt": "2017-03-23T14:02:21.144Z",
    "author": "dashulia_guzova",
    "content": "Дресс-код на мероприятиях до сих пор вызывает смешанные чувства – от подозрения и сомнения до волнения и нерешимости. Такими выходят и образы: в театр приходят в джинсах, выпускные превращаются в дефиле платьев из штор, и любимое – колготки под босоножки на события, где от вас ждут Black Tie. Если вы собираетесь на такой вечер, а в Минске они начали появляться, эти советы для вас. Мы решили пофантазировать, что можно надеть на пафосный гала-ужин от итальянских поваров с тремя звездами Miсhelin и заглянули в сервис аренды вечерних платьев Oh My Look!\nBlack Tie – официальный и торжественный дресс-код. Это стиль свадеб, праздничных приёмов или театральных премьер. Женщинам на такие мероприятия выбирать только длинные вечерние платья либо, в зависимости от степени торжественности события, коктейльные платья не выше колена. Оставьте дома ультрамодные платья японских дизайнеров, вычурные решения, архитектурные формы и наряды кислотных цветов. Сделайте упор на классику: атласная ткань, черно-белое сочетание цветов, мягкие драпировки, подчеркнутая талия.\nЭлегантное черное платье в пол с открытой спиной сочетает в себе женственность, строгость и загадку.",
    "tags": ["nice"],
    "image": "https://img.tyt.by/720x720s/n/lady.tut.by/02/e/mishlenplatiya_27_.jpg"
}, {
    "id": "1490278140800",
    "title": "Киберспортсмен пробил головой монитор после поражения в игре",
    "summary": "После проигранного матча игрок League of Legends со злости разбил монитор. Причем сделал он это своей головой.\n",
    "createdAt": "2017-03-23T14:09:00.801Z",
    "author": "bah",
    "content": "После проигранного матча игрок League of Legends со злости разбил монитор. Причем сделал он это своей головой. Случай произошел в одном из компьютерных клубов китайского города Ланьчжоу, пишет Kotaku.\n\nСообщается, что молодой человек был вне себя от плохой игры товарищей по команде, что и привело к необычному инциденту. И пока остальные посетители кафе делали фото неудачливого игрока, персонал интернет-кафе помогал ему достать голову из монитора.",
    "tags": ["lol"],
    "image": "https://img.tyt.by/720x720s/n/it/0d/4/euewk62czbiq6savo0lp.jpg"
}, {
    "id": "1490278465736",
    "title": "\"Героиня нашего времени\": как борисовчанка стала лучшей в мире танцовщицей на коляскаx.",
    "summary": "Танцы на колясках изобрели британцы в конце 1960-х для реабилитации людей с инвалидностью.В Беларуси этот вид спорта появился 20 лет назад.\n",
    "createdAt": "2017-03-25T16:18:34.191Z",
    "author": "Ilya",
    "content": "Танцы на колясках изобрели британцы в конце 1960-х для реабилитации людей с инвалидностью. Спустя десятилетие в Швеции прошли первые международные соревнования, а в 2000-м спортивные танцы на колясках включили в программу Паралимпиады.\nВ Беларуси этот вид спорта появился 20 лет назад. Успехи нашей страны в соревнованиях связаны с пионеркой спортивного движения – Анной Горчаковой – действующей чемпионкой мира и Европы по спортивным танцам на колясках.Анна Горчакова – активная, веселая и умная женщина, по образованию психолог. Она родилась с врожденным заболеванием позвоночника.\n",
    "tags": ["life"],
    "image": "https://img.tyt.by/720x720s/n/lady.tut.by/05/b/borisovchanka_tancovshi_001.jpg"
}, {
    "id": "1490278672234",
    "title": "Белорусская мода - это поиски компромиссов",
    "summary": "Цикл проекта «Мода для народа»в поиске лучшего образа в офис от белорусских дизайнеров, подошел к логическому завершению\n",
    "createdAt": "2017-03-23T14:17:52.234Z",
    "author": "bah",
    "content": "— Говорим «Париж» — первая ассоциация «Шанель», говорим «Америка» — «Майкл Корс», «Италия» — «Гуччи» … Что отличает белорусскую моду? Есть ли у нас если уж не мирового уровня бренд, то сравнительно яркая ассоциация?\n— Нашу моду отличает некоторая этничность. Многие дизайнеры пробуют вносить в новые формы, новые решения что-то из традиционного белорусского костюма. О чем речь — ну, естественно, сразу на ум приходят вышиванки. Хотя этот тренд мало кто исполнил качественно и достойно. Сегодня вышиванка в гардеробе имеет право на жизнь, если она выполнена качественно и добротно, вручную вышита, например, как раньше. Но если просто скопировать со старой сорочки орнамент — это не мода. Можно этот узор интерпретировать, интегрировать в какой-то новый принт — вот тогда речь уже может идти о моде и дизайне. Dolce & Gabbana не так давно в своей коллекции вышили украинские мотивы крестиком вручную — приняли отлично! Вот, нам надо равняться. Тогда и страну нашу можно будет идентифицировать в глобальной fashion-индустрии. В остальном — вышиванка у нас, скорее, скоротечный тренд. Хорошо, что люди обращаются к традициям, к истории, жаль, что в вещах такого качества. Все эти маечки с отпечатанными узорами никак не назовешь предметом модной одежды.\n— Вы сейчас расстроили каждого третьего белоруса, сделавшего селфи в майке-вышиванке…\n — Это хороший подарок — купите друзьям за границу как сувенир. А тут это носить не стоит.\n— Белорусская мода еще очень молодая! Ей надо еще расти, набираться сил, развиваться. Что она и делает. Пока у нас явный дефицит в высокой моде. Когда каждая пуговица пришита руками, каждая бусинка, каждый шов отслеживает лично дизайнер. Надеюсь, скоро наш рынок будет готов к такой моде… Хотя, может, понадобятся годы, десятки лет. Но хочется верить, мы застанем это время. А талантов у нас много. Они еще проявят себя. По нашему опыту — кутюрные вещи могут пользоваться спросом. Когда мы отшивали такую коллекцию, делали скорее подиумные модели, для показа. Было даже неожиданно, что нас сразу накрыла волна звонков «как и где это купить?». И раскупили! Хотя такие яркие вещи явно «выйдут в свет» всего пару раз, очень уж много они на себя берут внимания.",
    "tags": ["fashion"],
    "image": "https://img.tyt.by/620x620s/n/lady.tut.by/07/9/vyshivanku_kupite_druzyam_001.jpg"
}, {
    "id": "1490350409655",
    "title": "6 странных причин влюблённости",
    "summary": "6 странных причин влюблённости докажут вам, что это чувство — чистая психология",
    "createdAt": "2017-03-25T16:33:34.028Z",
    "author": "Ilya",
    "content": "1. У вас необычный тембр голоса.\nНизкий и грубый женский голос, например, вызывает у многих мужчин симпатию.\n 2. Вы пристально смотрели друг другу в глаза в течение нескольких минут.\nВ таком случае даже между едва знакомыми людьми может появиться чувство страстной любви и даже привязанности.\n 3. Вы \"подогреваете\" свидание.\nЕсли свидание проходит за чашечкой горячего кофе или чая, то вы автоматически начинаете относиться к собеседнику более душевно и доверительно.\n 4. Он (она) не понравились вам при первой встрече.\nВы ведь знаете, что первое впечатление может быть обманчивым?\n 5. Вы носите красное.\nЖенщины, предпочитающие красный, более успешны в искусстве флирта, а также этот цвет является показателем статуса.\n 6. У вас на лице присутствует щетина.\nМужчин со щетиной женщины считают более привлекательными и брутальными.",
    "tags": ["love"],
    "image": "https://img-s3.onedio.com/id-58cf74864830c08b3b038c33/rev-0/w-635/f-jpg-webp/s-6ad1a4953cfacf1575bcf7b244d6de2defe07c59.webp"
}]