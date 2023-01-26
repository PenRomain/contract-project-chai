const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div className="main_map">

        <div className="china country" title="китайский"><a href="/china">Китай</a></div>
       <div className="japan country"><a href="/japan">Япония</a></div>
       <div className="vietnam country"><a href="/vietnam">Вьетнам</a></div>
        <div className="taiwan country"><a href="/taiwan">Тайвань</a></div>
        <div className="australia country"><a href="/australia">Австралия</a></div>
        <div className="kenia">Кения</div>
        <div className="azorskieOstrova">Азорские острова</div>
        <div className="ekvador">Эквадор</div>
        <div className="peru">Перу</div>
        <div className="brazilia">Бразилия</div>
        <div className="argentina">Аргентина</div>
        <div className="kamerun">Камерун</div>
        <div className="turkey">Турция</div>
        <div className="uganda">Уганда</div>
        <div className="ruanda">Руанда</div>
        <div className="burundi">Бурунди</div>
        <div className="milavi">Милави</div>
        <div className="zimbabve">Зимбабве</div>
        <div className="uznayaAfrika">Южная Африка</div>
        <div className="mozambik">Мозамбик</div>
        <div className="tanzania">Танзания</div>
        <div className="madagaskar">Мадагаскар</div>
        <div className="mavrikii">Маврикий</div>
        <div className="postSssr">Постсоветское пространство</div>
         <div className="india country"><a href="/india">Индия</a></div>
        <div className="shriLanka">Шри-Ланка</div>
        <div className="nepal">Непал</div>
        <div className="malazia">Малайзия</div>
        <div className="bangladesh">Бангладеш</div>
        <div className="indonezia">Индонезия</div>

        
        
       
        
        
        

      </div>
    </Layout>
  );
};
