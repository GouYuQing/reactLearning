//全局的head
//在其他页面引入然后放入就可以了
import Head from 'next/head'

const MyHeader  = ()=>{
    return(
        <>
        <Head>
            <title>JS hello</title>
        </Head>
        </>
    )
}
export default MyHeader;