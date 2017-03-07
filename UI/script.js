/**
 * Created by GE70 on 04.03.2017.
 */

var data = (function () {
    var articles = [
        {
            id: '1',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-27T23:15:00+0300'),
            author: 'Иванов Иван',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sportsman', 'tag']
        },
        {
            id: '2',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-01-27T23:23:00+0300'),
            author: 'Гузова Дарья',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sports']
        },
        {
            id: '3',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2016-11-27T23:00:00+0300'),
            author: 'Адериха Максим',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['cool']
        },
        {
            id: '4',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2016-01-19T23:16:00+0300'),
            author: 'Амброжевич Татьяна',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['cool']
        },
        {
            id: '5',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-03-03T23:40:00+0300'),
            author: 'Белоус Андрей',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '6',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-14T23:00:00+0300'),
            author: 'Бушуев Артем',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '7',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2016-05-24T23:00:00+0300'),
            author: 'Гацко Антон',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '8',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-08T23:08:00+0300'),
            author: 'Гончаревич Андрей',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '9',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-09T23:09:00+0300'),
            author: 'Гузова Дарья',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '10',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-09T23:09:12+0300'),
            author: 'Гончаревич Андрей',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '11',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-27T23:00:00+0300'),
            author: 'Иванов Иван',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '12',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-27T23:00:00+0300'),
            author: 'Гацко Антон',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '13',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-27T23:00:00+0300'),
            author: 'Гацко Антон',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '14',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-27T23:00:00+0300'),
            author: 'Гацко Антон',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '15',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-27T23:00:00+0300'),
            author: 'Иванов Иван',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '16',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-27T23:00:00+0300'),
            author: 'Амброжевич Татьяна',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '17',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-27T23:00:00+0300'),
            author: 'Амброжевич Татьяна',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '18',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-24T23:00:40+0300'),
            author: 'Гузова Дарья',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '19',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-02-03T21:15:00+0300'),
            author: 'Гузова Дарья',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '20',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-01-01T23:54:00+0300'),
            author: 'Гузова Дарья',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
        {
            id: '21',
            title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
            summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
            createdAt: new Date('2017-01-05T23:54:48+0300'),
            author: 'Гузова Дарья',
            content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
            tags: ['sport']
        },
    ];

    var tags = new Set();

    for (var i = 0; i < articles.length; i++) {
        for(tag of articles[i].tags)
            tags.add(tag);
    }

    function getArticle(id) {
        id = id || null;
        if (typeof id === 'string') {
            for (var i = 1; i <= articles.length; i++) {
                if (id === articles[i].id) {
                    return (articles[i]);
                }
            }
        }
    }

    function removeTag(tag) {
        if (typeof tag === 'string') {
            tags.delete(tag);
            return true;
        }
        return false;
    }

    function removeArticle(id) {
        id = id || null;
        if (typeof id === 'string') {
            for (var i = 0; i < articles.length; i++) {
                if (id === articles[i].id) {
                    articles.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    function addTag(tag) {
        tags.add(tag);
        return true;
    }

    function validateArticle(article) {
        if (article === null || article === undefined) {
            return false
        }
        if ((typeof article.id === 'string') && (typeof article.title === 'string' && article.title.length < 100)
            && (typeof article.summary === 'string' && article.summary.length < 200)
            && (typeof article.author === 'string') && (typeof article.content === 'string') && ((article.createdAt instanceof Date))){
            return true;
        }
        return false;
    }

    function addArticle(article) {
        if (article === null || article === undefined) {
            return false
        }
        if (validateArticle(article) === true) {
            articles.push(article);
            return true;
        }
        return false;
    }

    function editArticle(id, article) {
        outdatedArticle = articles.find(function (a) {
            return a.id === id;
        });

        if (!outdatedArticle) {
            return false;
        }
        var newArticle = Object.assign(outdatedArticle, article);

        if (!validateArticle(newArticle)) {
            return false;
        }

        articles.map(function (a) {
            return a.id !== id ? a : newArticle;
        });

        return true;
    }

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;

        var articlesSlice = articles.slice();

        articlesSlice.sort(function (a, b) {
            if (a.createdAt > b.createdAt) return 1;
            if (a.createdAt < b.createdAt) return -1;
            return 0;
        });

        if (filterConfig) {
            if (filterConfig.author) {
                articlesSlice = articlesSlice.filter(function (a) {
                    return filterConfig.author === a.author;
                });
            }

            if (filterConfig.createdAt) {
                filterConfig.createdAt = new Date(filterConfig.createdAt);
                articlesSlice = articlesSlice.filter(function (a) {
                    return filterConfig.createdAt === a.createdAt;
                });
            }
            if (filterConfig.tags) {
                articlesSlice = articlesSlice.filter(function (a) {
                    var intersection = filterConfig.tags.filter(function (tag) {
                        return a.tags.indexOf(tag) != -1;
                    })
                    return intersection.length > 0;
                });
            }

        }
        return articlesSlice.slice(skip, skip + top);
    }

    return {
        getArticle: getArticle,
        getArticles: getArticles,
        addArticle: addArticle,
        editArticle: editArticle,
        validateArticle: validateArticle,
        removeTag: removeTag,
        removeArticle: removeArticle,
        addTag: addTag,
        getTags: tags
    };
})();


console.log(data.getArticles(0, 30));
console.log(data.getArticle('15'));
console.log(data.validateArticle(data.getArticle('15')));
console.log(data.removeArticle('15'));
console.log(data.addArticle({
    id: '111',
    title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
    summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
    createdAt: new Date('2017-02-27T23:00:00'),
    author: 'Иванов Иван',
    content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.',
    tags: ['cool']
}));
console.log(data.editArticle('1', { title: 'newTitle', content: 'newContent'}));
console.log(data.getArticles(0, 10));
console.log(data.getArticles(0, 10, {author: 'Иванов Иван'}));
console.log(data.getArticles(0, 10, {tags: ['cool']}));
console.log(data.getTags);
console.log(data.removeTag('#cool'));
console.log(data.getTags);
