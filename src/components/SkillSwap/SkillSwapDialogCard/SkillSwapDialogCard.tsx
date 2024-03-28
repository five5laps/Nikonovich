import styles from "./SkillSwapDialogCard.module.css";

const SkillSwapDialogCard = () => {
  return (
    <div className={styles.interview}>
      <div className={styles.interview_top}>
        <div className={styles.interview_top_title}>Глубинное интервью</div>
        <div className={styles.interview_top_text}>
          Следующим этапом командной работы стало глубинное интервью. В ходе
          данного исследования я принимала активное участие в работе команды,
          предлагая свои варианты вопросов для гайда интервью, с ним можно
          ознакомиться далее. Затем самостоятельно провела интервью у двух
          респондентов и проанализировала их, сделала ключевые выводы, которые
          позже помогли команде выявить основные пожелания потенциальных
          пользователей.
        </div>
      </div>
      <div className={styles.interview_card}>
        <div className={styles.interview_card_content}>
          <div className={styles.interview_card_content_title}>
            Начало интервью
          </div>
          <div className={styles.interview_card_content_dialog}>
            <div className={styles.interview_card_content_hello}>
              — Привет, <p>[имя респондента]</p>! Меня зовут <p>[ваше имя]</p>.
              Можем перейти на «ты»?
            </div>
            <div>Давай сразу расскажу, как все будет происходить: </div>
            <div>
              <ul>
                <li>
                  Я задам тебе несколько вопросов — отвечай так, как считаешь
                  нужным. И смело говори, что думаешь. Мы хотим узнать все, что
                  может беспокоить наших потенциальных пользователей.
                </li>
                <li>
                  Если у тебя появятся вопросы, можешь их мне задать, но я не на
                  все из них смогу дать ответы. Хорошо?
                </li>
                <li>Вся наша встреча продлится около часа.</li>
                <li>
                  Я буду записывать наш разговор в Zoom. Это необходимо только в
                  рабочих целях, чтобы после пересмотреть, как все прошло, если
                  я что-то упущу в процессе. Хорошо?{" "}
                  <p>
                    [Ждем, когда респондент согласится, и только потом включаем
                    запись].
                  </p>{" "}
                  Этот разговор не попадет на YouTube и вообще не будет выложен
                  в интернет.
                </li>
              </ul>
            </div>
            <div style={{ color: "#DE2222" }}>
              Спасибо, теперь я не потеряю важные данные. Сегодня мы поговорим
              о....
            </div>
            <div style={{ fontWeight: "bold" }}>Валидационные вопросы:</div>
            <div>1. Расскажи, сколько тебе лет и кем ты работаешь.</div>
            <div>
              2. Чем ты занимаешься в свободное время?{" "}
              <p>(надо выяснить, есть ли вообще у человека хобби и интересы)</p>
            </div>
            <div>
              3. Как ты выбрал(а) свое хобби?{" "}
              <p>
                (тут надо уточнить, есть ли у него опыт поиска новых увлечений в
                онлайн-среде, если нет, то почему)
              </p>
            </div>
            <div>
              4. Где ты находишь единомышленников? Как вы общаетесь?{" "}
              <p>
                (тут надо уточнить, есть ли у респондента опыт онлайн-общения с
                единомышленниками)
              </p>
            </div>
            <div className={styles.interview_card_content_dialog_warmup}>
              <div className={styles.interview_card_content_title}>
                Разогрев
              </div>
              <div>
                — Что именно тебе нравится в твоем увлечении? (какие эмоции
                испытываешь, может, нравится достигать результатов и делится в
                соцсетях?)
              </div>
              <div>— Как ты развиваешься в любимой сфере?</div>
              <div>— Что мотивирует тебя достигать новых результатов?</div>
            </div>
            <div className={styles.interview_card_content_dialog_mainpart}>
              <div className={styles.interview_card_content_title}>
                Основная часть
              </div>
              <div>
                — Ты всегда выбираешь хобби в какой-то определенной сфере или ты
                готов пробовать что-то новое в самых разных и не похожих друг на
                друга сферах? (новый вопрос!)
                <li style={{ color: "#978A8A" }}>
                  <p>
                    {" "}
                    Гипотеза: Если дать пользователям большой выбор
                    мастер-классов по разным хобби, у них появится интерес и
                    мотивация попробовать новые занятия и развивать свои навыки.
                  </p>
                </li>
              </div>
              <div>
                — Что может заинтересовать тебя попробовать новое хобби?
              </div>
              <div>
                — С какими проблемами ты сталкиваешься при выборе нового хобби?
              </div>
              <div>— Ты когда-нибудь пробовал(а) онлайн-обучение?</div>
              <div>
                — Расскажи о своем опыте посещения
                онлайн-вебинаров/хобби/курсов?
              </div>
              <div>
                — В каком виде тебе удобнее получать новую информацию при
                прохождении онлайн обучения (видео/аудио/статьи)?
              </div>
              <div>
                — Ты предпочитаешь проходить уроки в записи или в режиме
                реального времени?
              </div>
              <div>
                — Какой формат общения с преподавателем кажется тебе наиболее
                эффективным?
              </div>
              <div>— Как ты относишься к групповым занятиям?</div>
              <div>
                — Хотел бы ты делиться своим прогрессом с одногруппниками?
                Почему?
                <li style={{ color: "#978A8A" }}>
                  <p>
                    Гипотеза: Если дать возможность участвовать в групповых
                    занятиях онлайн, удастся вовлечь пользователей в обучение,
                    они будут обмениваться опытом и создавать сообщества по
                    интересам.
                  </p>
                </li>
              </div>
              <div>— Как удобнее было бы контактировать с одногруппниками?</div>
            </div>
            <div className={styles.interview_card_content_dialog_culmination}>
              <div className={styles.interview_card_content_title}>
                Кульминация
              </div>
              <div>
                — Пользуешься ли ты какими-то приложениями/сайтами для обучения?
              </div>
              <div>
                — На что ты обращаешь внимание при выборе обучающей платформы
                (онлайн/офлайн, групповые/индивидуальные занятия, большой выбор
                мастер-классов)?
              </div>
              <div>
                — Какие функции в образовательном приложении кажутся тебе
                наиболее важными?
              </div>
              <div>
                — Имеет ли для тебя значение отслеживание прогресса?
                <li style={{ color: "#978A8A" }}>
                  <p>
                    Гипотеза: Если придумать, как отслеживать прогресс и
                    достижения, у пользователей появится мотивация заниматься
                    хобби и достигать новых результатов.
                  </p>
                </li>
              </div>
              <div>
                — С какой регулярностью тебе хочется проверять свой прогресс?
                (день/неделя/месяц)
              </div>
              <div>
                — В каком формате тебе хотелось бы получать фидбэк с твоим
                прогрессом? (пуш-уведомления, почта, вкладка в самом
                приложении)?
              </div>
              <div>
                — Требуется ли тебе дополнительная поддержка со стороны
                обучающей платформы?
              </div>
              <div>
                — Ты бы использовал в приложении функцию ведения собственного
                курса?
              </div>
            </div>
            <div className={styles.interview_card_content_dialog_ending}>
              <div className={styles.interview_card_content_title}>
                Заключение
              </div>
              <div>
                — Расскажи, что самое приятное и неприятное было в твоем опыте
                прохождения онлайн или оффлайн мастер-классов?
              </div>
              <div style={{ color: "#DE2222" }}>
                — Спасибо тебе! Интересно было узнать твое мнение! Спасибо за
                участие в исследовании! Хорошего дня! Пока!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSwapDialogCard;