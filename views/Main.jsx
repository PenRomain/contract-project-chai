const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div className="main_map">

        <div className="china" title="китайский"><a href="/china">Китай</a></div>
        <div className="japan"><a href="/japan">Япония</a></div>
        <div className="vietnam"><a href="/vietnam">Вьетнам</a></div>
        <div className="taiwan"><a href="/taiwan">Тайвань</a></div>
        <div className="australia"><a href="/australia">Австралия</a></div>
        <div className="kenia"><a href="/kenia">Кения</a></div>
        <div className="azorskieOstrova"><a href="/azorskieOstrova">Азорские острова</a></div>
        <div className="ekvador"><a href="/ekvador">Эквадор</a></div>
        <div className="peru"><a href="/peru">Перу</a></div>
        <div className="brazilia"><a href="/brazilia">Бразилия</a></div>
        <div className="argentina"><a href="/argentina">Аргентина</a></div>
        <div className="kamerun"><a href="/kamerun">Камерун</a></div>
        <div className="turkey"><a href="/turkey">Турция</a></div>
        <div className="uganda"><a href="/uganda">Уганда</a></div>
        <div className="ruanda"><a href="/ruanda">Руанда</a></div>
        <div className="burundi"><a href="/burundi">Бурунди</a></div>
        <div className="milavi"><a href="/milavi">Милави</a></div>
        <div className="zimbabve"><a href="/zimbabve">Зимбабве</a></div>
        <div className="uznayaAfrika"><a href="/uznayaAfrika">Южная Африка</a></div>
        <div className="mozambik"><a href="/mozambik">Мозамбик</a></div>
        <div className="tanzania"><a href="/tanzania">Танзания</a></div>
        <div className="madagaskar"><a href="/madagaskar">Мадагаскар</a></div>
        <div className="mavrikii"><a href="/mavrikii">Маврикий</a></div>
        <div className="postSssr"><a href="/postSssr">Постсоветское пространство</a></div>
        <div className="india country"><a href="/india">Индия</a></div>
        <div className="shriLanka"><a href="/shriLanka">Шри-Ланка</a></div>
        <div className="nepal"><a href="/nepal">Непал</a></div>
        <div className="malazia"><a href="/malazia">Малайзия</a></div>
        <div className="bangladesh"><a href="/bangladesh">Бангладеш</a></div>
        <div className="indonezia"><a href="indonezia">Индонезия</a></div>

      </div>
    </Layout>
  );
};
