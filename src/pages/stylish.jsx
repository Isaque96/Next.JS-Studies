import style from '../styles/Stylish.module.css'
import Layout from '../components/Layout';

export default function Stylish() {
  return (
    <Layout title="Exemplo de CSS Modularizado">
      <div className={style.roxo}>
        <h1>Estilos usando CSS Módulos</h1>
      </div>
    </Layout>
  )
}