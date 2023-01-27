const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title, user, teaContry }) {
  return (
    <Layout title={title} user={user}>
      <div className="main_map">
        <div className="china"><a title={teaContry.find((c) => c.name === 'China').teas} href="/china">Китай</a></div>
        {/* <div className="japan"><a title={teaContry.find((c) => c.name === 'Japan').teas} href="/japan">Япония</a></div> */}
        {/* <div className="vietnam"><a title={teaContry.find((c) => c.name === 'Vietnam').teas} href="/vietnam">Вьетнам</a></div> */}
        {/* <div className="taiwan"><a title={teaContry.find((c) => c.name === 'Taiwan').teas} href="/taiwan">Тайвань</a></div> */}
        {/* <div className="australia"><a title={teaContry.find((c) => c.name === 'Australia').teas} href="/australia">Австралия</a></div> */}
        {/* <div className="kenia"><a title={teaContry.find((c) => c.name === 'Kenia').teas} href="/kenia">Кения</a></div> */}
        {/* <div className="azorskieOstrova"><a title={teaContry.find((c) => c.name === 'Kenia').teas} href="/AzorskieOstrova">Азорские острова</a></div> */}
        {/* <div className="ekvador"><a title={teaContry.find((c) => c.name === 'Ekvador').teas} href="/ekvador">Эквадор</a></div> */}
        {/* <div className="peru"><a title={teaContry.find((c) => c.name === 'Peru').teas} href="/peru">Перу</a></div> */}
        {/* <div className="brazilia"><a title={teaContry.find((c) => c.name === 'Brazilia').teas} href="/brazilia">Бразилия</a></div> */}
        {/* <div className="argentina"><a title={teaContry.find((c) => c.name === 'Argentina').teas} href="/argentina">Аргентина</a></div> */}
        {/* <div className="kamerun"><a title={teaContry.find((c) => c.name === 'Kamerun').teas} href="/kamerun">Камерун</a></div> */}
        {/* <div className="turkey"><a title={teaContry.find((c) => c.name === 'Turkey').teas} href="/turkey">Турция</a></div> */}
        {/* <div className="uganda"><a title={teaContry.find((c) => c.name === 'Uganda').teas} href="/uganda">Уганда</a></div> */}
        {/* <div className="ruanda"><a title={teaContry.find((c) => c.name === 'Ruanda').teas} href="/ruanda">Руанда</a></div> */}
        {/* <div className="burundi"><a title={teaContry.find((c) => c.name === 'Burundi').teas} href="/burundi">Бурунди</a></div> */}
        {/* /!* <div className="milavi"><a title={teaContry.find((c) => c.name === 'Milavi').teas} href="/milavi">Милави</a></div> *!/ */}
        {/* <div className="zimbabve"><a title={teaContry.find((c) => c.name === 'Zimbabve').teas} href="/zimbabve">Зимбабве</a></div> */}
        {/* <div className="uznayaAfrika"><a title={teaContry.find((c) => c.name === 'UznayaAfrika').teas} href="/uznayaAfrika">Южная Африка</a></div> */}
        {/* <div className="mozambik"><a title={teaContry.find((c) => c.name === 'Mozambik').teas} href="/mozambik">Мозамбик</a></div> */}
        {/* <div className="tanzania"><a title={teaContry.find((c) => c.name === 'Tanzania').teas} href="/tanzania">Танзания</a></div> */}
        {/* <div className="madagaskar"><a title={teaContry.find((c) => c.name === 'Madagaskar').teas} href="/madagaskar">Мадагаскар</a></div> */}
        {/* <div className="mavrikii"><a title={teaContry.find((c) => c.name === 'Mavrikii').teas} href="/mavrikii">Маврикий</a></div> */}
        {/* <div className="postSssr"><a title={teaContry.find((c) => c.name === 'PostSssr').teas} href="/postSssr">Постсоветское пространство</a></div> */}
        <div className="india country"><a title={teaContry.find((c) => c.name === 'India').teas} href="/india">Индия</a></div>
        {/* <div className="shriLanka"><a title={teaContry.find((c) => c.name === 'ShriLanka').teas} href="/shriLanka">Шри-Ланка</a></div> */}
        {/* <div className="nepal"><a title={teaContry.find((c) => c.name === 'Nepal').teas} href="/nepal">Непал</a></div> */}
        {/* <div className="malazia"><a title={teaContry.find((c) => c.name === 'Malazia').teas} href="/malazia">Малайзия</a></div> */}
        {/* <div className="bangladesh"><a title={teaContry.find((c) => c.name === 'Bangladesh').teas} href="/bangladesh">Бангладеш</a></div> */}
        {/* <div className="indonezia"><a title={teaContry.find((c) => c.name === 'Indonezia').teas} href="/indonezia">Индонезия</a></div> */}

      </div>
    </Layout>
  );
};
