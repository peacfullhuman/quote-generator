function generate(){
    var quates = {
        'Наполеон Хилл': '"Что разум человека может постигнуть и во что он может поверить, того он способен достичь."',
        'Альберт Эйнштейн': '"Стремитесь не к успеху, а к ценностям, которые он дает."',
        'Флоренс Найтингейл': '"Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других."',
        'Майкл Джордан': '"За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха."',
        'Амелия Эрхарт': '"Сложнее всего начать действовать, все остальное зависит только от упорства."',
        'Федор Достоевский': '"Надо любить жизнь больше, чем смысл жизни."',
        'Джон Леннон': '"Жизнь - это то, что с тобой происходит, пока ты строишь планы."',
        'Альберт Эйнштейн': '"Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно."',
        'Марк Твен': '"Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!"',
        'Борис Стругацкий': '"Начинать всегда стоит с того, что сеет сомнения."',
        'Фазиль Искандер': '"Настоящая ответственность бывает только личной."',
        'Сократ': '"Неосмысленная жизнь не стоит того, чтобы жить."',
        'Вуди Аллен': '"80% успеха - это появиться в нужном месте в нужное время."',
        'Стив Джобс': '"Ваше время ограничено, не тратьте его, живя чужой жизнью."',
        'Винс Ломбарди': '"Победа - это еще не все, все - это постоянное желание побеждать."',
        'Иммануил Кант': '"Наука — это организованные знания, мудрость — это организованная жизнь."',
        'Наполеон Бонапарт': '"В моем словаре нет слова «невозможно."',
        'Христофор Колумб': '"Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду."',
        'Махатма Ганди': '"Свобода ничего не стоит, если она не включает в себя свободу ошибаться."',
        'Джим Рон': '"Либо вы управляете вашим днем, либо день управляет вами."',
        'Генри Форд': '"Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится - вы тоже правы."',
        'Марк Твен': '"Два самых важных дня в твоей жизни: день, когда ты появился на свет, и день, когда понял, зачем."',
        'Иоганн Вольфганг Гете': '"Начинайте делать все, что вы можете сделать – и даже то, о чем можете хотя бы мечтать. В смелости гений, сила и магия.  "',
        'Фрэнк Синатра': '"Лучшая месть – огромный успех."'
    }

    var authors = Object.keys(quates)
    
    var author = authors[Math.floor(Math.random()*authors.length)]

    var quate = quates[author]

    document.getElementById('quote').innerHTML = quate
    document.getElementById('author').innerHTML = author
}
