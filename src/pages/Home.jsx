import GameCard from '../components/GameCard'
import JogoImg from '../assets/Jogo01.jpg'

const Home = () => {
  const games=[
    {id:1,titulo:"Jogo-01",preco:"R$ 300.00", image:JogoImg},
    {id:2,titulo:"Jogo-02",preco:"R$ 350.00", image:JogoImg},
    {id:3,titulo:"Jogo-03",preco:"R$ 400.00", image:JogoImg},
    {id:4,titulo:"Jogo-04",preco:"R$ 450.00", image:JogoImg}
  ];
  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo font-bold text-white text-3-xl">Jogos em <span className="font-bold text-[#99ff00]">Destaque</span></h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">

        {games.map((game)=>(
          <GameCard
          key={game.id}
          titulo={game.titulo}
          preco={game.preco}
          image={game.image}/>
        ))}

      </section>
      
    </main>
  )
}

export default Home
