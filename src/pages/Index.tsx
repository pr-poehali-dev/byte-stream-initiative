export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ТОКАРНЯ</div>
        <nav>
          <a href="#">Услуги</a>
          <a href="#">О нас</a>
          <a href="#">Проекты</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать детали</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ТОЧНО
              <br />В <span>МЕТАЛЛЕ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Токарно-фрезерная мастерская. Изготавливаем запчасти для хлебопекарного, кондитерского и мясного оборудования. Сварка, ремонт, 3D-моделирование.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Оставить заявку
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Наши услуги
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/2598bf85-337c-4872-9f95-aa07fc632565/files/061b5fef-d9d9-41bf-abbe-873c747e1f83.jpg')" }}>
            <div className="sticker">
              ЛЮБОЙ
              <br />
              МЕТАЛЛ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ТОЧНОСТЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              СТАЛЬ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ТОКАРНЫЕ РАБОТЫ * ФРЕЗЕРОВКА * СВАРКА * РЕМОНТ ОБОРУДОВАНИЯ * ЗАПЧАСТИ ПОД ЗАКАЗ * 3D-МОДЕЛИРОВАНИЕ * КОНСТРУКТОРСКИЕ УСЛУГИ * ЛЮБАЯ СПЕЦТЕХНИКА *
            ТОКАРНЫЕ РАБОТЫ * ФРЕЗЕРОВКА * СВАРКА * РЕМОНТ ОБОРУДОВАНИЯ * ЗАПЧАСТИ ПОД ЗАКАЗ * 3D-МОДЕЛИРОВАНИЕ * КОНСТРУКТОРСКИЕ УСЛУГИ * ЛЮБАЯ СПЕЦТЕХНИКА
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ УСЛУГИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все услуги
            </a>
          </div>

          <div className="menu-grid">
            {/* Запчасти */}
            <div className="menu-card">
              <span className="menu-tag">Топ запрос</span>
              <img
                src="https://cdn.poehali.dev/projects/2598bf85-337c-4872-9f95-aa07fc632565/files/8bd76a82-8862-41a4-a3bf-a881f0939520.jpg"
                alt="Изготовление запчастей"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Запчасти под заказ</h3>
                  <span className="price">от 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Изготовление деталей для хлебопекарного, кондитерского и мясного оборудования. Точно по чертежу или образцу.
                </p>
              </div>
            </div>

            {/* Сварка */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Надёжно
              </span>
              <img
                src="https://cdn.poehali.dev/projects/2598bf85-337c-4872-9f95-aa07fc632565/files/8b2ac362-22f0-40ed-97b4-1b2ea93d497d.jpg"
                alt="Сварочные работы"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Сварочные работы</h3>
                  <span className="price">от 800 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Ручная и полуавтоматическая сварка. Конструкции, рамы, ремонт корпусов оборудования и спецтехники.</p>
              </div>
            </div>

            {/* 3D-моделирование */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Хай-тек
              </span>
              <img
                src="https://cdn.poehali.dev/projects/2598bf85-337c-4872-9f95-aa07fc632565/files/4c6f2fca-3e3c-4cf5-90e4-aec9706aced3.jpg"
                alt="3D-моделирование"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>3D-моделирование</h3>
                  <span className="price">от 1 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Конструкторские услуги и 3D-моделирование под производство. Чертежи, разработка нестандартных деталей.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">СДЕЛАЕМ. ТОЧНО. В СРОК.</h2>
            <p className="vibe-text">
              Работаем с предприятиями пищевой промышленности, мясопереработки, хлебозаводами и кондитерскими фабриками. Ремонтируем и изготавливаем запчасти для любого оборудования — от простой втулки до сложного узла. Принимаем заявки по чертежам, образцам или описанию.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нашей мастерской
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            НАШИ РАБОТЫ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
                alt="Токарный станок"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?auto=format&fit=crop&w=400&q=80"
                alt="Фрезеровка металла"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80"
                alt="Сварочные работы"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=400&q=80"
                alt="Готовые запчасти"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1590959651373-a281d450e825?auto=format&fit=crop&w=400&q=80"
                alt="Металлообработка"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80"
                alt="Производство деталей"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ТОКАРНЯ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Токарно-фрезерная мастерская. Изготовление и ремонт запчастей для промышленного оборудования, сварка, 3D-моделирование.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Услуги
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Проекты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Режим работы</h4>
          <ul>
            <li>Пн–Пт: 8:00–18:00</li>
            <li>Сб: 9:00–15:00</li>
            <li>Вс: выходной</li>
            <li style={{ marginTop: "10px" }}>
              <strong>Принимаем заявки 24/7</strong>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="tel:+79043983859" style={{ color: "inherit", textDecoration: "none" }}>
                +7 (904) 398-38-59
              </a>
            </li>
            <li>
              <a href="mailto:tokarnya-servis@yandex.ru" style={{ color: "inherit", textDecoration: "none" }}>
                tokarnya-servis@yandex.ru
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>© 2026 ТОКАРНЯ. Все права защищены.</p>
          <p>ИП Черкасов С.А. ОГРНИП 326527500000122</p>
        </div>
      </footer>
    </>
  );
}