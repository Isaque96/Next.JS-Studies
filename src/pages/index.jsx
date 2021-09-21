import Navigator from '../components/Navigator';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navigator text="Estiloso" destiny="/stylish"/>
      <Navigator text="Exemplo" destiny="/exemple" color="#9400d3"/>
      <Navigator text="JSX" destiny="/jsx" color="crimson"/>
      <Navigator text="Navegação #01" destiny="/navigation" color="green"/>
      <Navigator text="Navegação #02" destiny="/customer/rj-7/clienteBrabo" color="blue"/>
      <Navigator text="Componente com Estado" destiny="/state" color="darkSlateGray"/>
      <Navigator text="Integração com API #01" destiny="/integration_1" color="maroon"/>
      <Navigator text="Conteúdo Estático" destiny="/static" color="lightSteelBlue"/>
    </div>
  )
}