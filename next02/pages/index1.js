// import React from 'react'
// import Head from 'next/head'
// import Nav from '../components/nav'
// import Hello from '../components/hello'

// const Home = () => (
//   <div>
//     <Head>
//       <title>Home</title>
//     </Head>
//     <Nav />
//     <Hello>next button </Hello>

//     <div className='hero'>
//       <h1 className='title'>Welcome to Next.js!</h1>
//       <p className='description'>
//         To get started, edit <code>pages/index.js</code> and save to reload.
//       </p>

//       <div className='row'>
//         <a href='https://nextjs.org/docs' className='card'>
//           <h3>Documentation &rarr;</h3>
//           <p>Learn more about Next.js in the documentation.</p>
//         </a>
//         <a href='https://nextjs.org/learn' className='card'>
//           <h3>Next.js Learn &rarr;</h3>
//           <p>Learn about Next.js by following an interactive tutorial!</p>
//         </a>
//         <a
//           href='https://github.com/zeit/next.js/tree/master/examples'
//           className='card'
//         >
//           <h3>Examples &rarr;</h3>
//           <p>Find other example boilerplates on the Next.js GitHub.</p>
//         </a>
//       </div>
//     </div>

//     <style jsx>{`
//       .hero {
//         width: 100%;
//         color: #333;
//       }
//       .title {
//         margin: 0;
//         width: 100%;
//         padding-top: 80px;
//         line-height: 1.15;
//         font-size: 48px;
//       }
//       .title,
//       .description {
//         text-align: center;
//       }
//       .row {
//         max-width: 880px;
//         margin: 80px auto 40px;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//       }
//       .card {
//         padding: 18px 18px 24px;
//         width: 220px;
//         text-align: left;
//         text-decoration: none;
//         color: #434343;
//         border: 1px solid #9b9b9b;
//       }
//       .card:hover {
//         border-color: #067df7;
//       }
//       .card h3 {
//         margin: 0;
//         color: #067df7;
//         font-size: 18px;
//       }
//       .card p {
//         margin: 0;
//         padding: 12px 0 0;
//         font-size: 13px;
//         color: #333;
//       }
//     `}</style>
//   </div>
// )

// export default Home
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'


const Home=()=>{
  function goOne(){
    Router.push('/Hello1');
  }
  function goTwo(){
    Router.push('/Hello2')
  }
  return(
<>
{/* 标签式导航 */}
  <div>郭丞郭丞郭丞</div>
  <div><Link href="/Hello1"><a>点击进入hello1页面</a></Link></div>
  <div><Link href="/Hello2"><a>点击进入hello2页面</a></Link></div>
  {/* 编程式跳转 */}
  <div>
    <button onClick={goOne}>点击进入1页面</button>
    <button onClick={goTwo}>点击进入2页面</button>
  </div>
  </>
  )
  
  
}
export default Home;