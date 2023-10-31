import styles from './Description.module.css';


function Description() {
    return (
        <div className={styles.block}>
            <div className={styles.top}>
                <div className={styles.title}>
                    Онлайн-кинотеатр ToFilm.ru — бесплатный онлайн-кинотеатр 
                    с лучшими HD фильмами и сериалами
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.text}>
                Каждый день миллионы людей ищут фильмы онлайн, 
                и никто не хочет усложнять себе жизнь – и вы наверняка один из них! 
                А раз так, то ToFilm.ru – это именно тот ресурс, который вам нужен. 
                От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не 
                просто освобождаем от необходимости идти в кинотеатр или изучать программу 
                телепередач – у посетителей нашего ресурса гораздо больше возможностей.
                </div>
                <div className={styles.text}>
                    Видеотека ToFilm.ru – это постоянно пополняющаяся коллекция 
                    в рунете, которая насчитывает более 60 тысяч отечественного 
                    и зарубежного контента, доступного для просмотра онлайн. 
                    Мы первыми в России подписали контракты с крупнейшими 
                    голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th 
                    Century Fox, Universal, Paramount, MGM и другими) и на постоянной 
                    основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.
                </div>
            </div>
        </div>
    );
}

export default Description