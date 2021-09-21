import Layout from '../components/Layout';

export function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Static(props) {
  return (
    <Layout title="Conteúdo Estático">
      <div>{props.numero}</div>
    </Layout>
  )
}