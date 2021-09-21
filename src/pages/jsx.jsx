import Layout from '../components/Layout';

export default function Jsx() {
  const title = <h1>JSX é um conceito Central</h1>

  function subtitle() {
    return <h2>{"muito legal!".toUpperCase()}</h2>
  }

  return (
    <Layout title="Entendendo o JSX">
      <div>
        {title}
        {subtitle()}
        <p>
          {JSON.stringify({ nome: "Isaque", sobrenome: "Schuwarte", idade: 25 })}
        </p>
      </div>
    </Layout>
  )
}