import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'


interface CardCategoriasProps {
  categorias: Categoria
}

function CardCategorias({categorias}: CardCategoriasProps) {
  return (
    <div className='border flex flex-col overflow-hidden justify-between rounded-md'>
      <header className='py-2 px-6 bg-teal-700 text-emerald-100 font-bold text-2xl '>{categorias.nome}
      </header>
      <p className='p-8 text-3xl bg-stone-200 h-full'>{categorias.descricao}</p>
      <div className="flex">
        <Link to={`/editarCategorias/${categorias.id}`} className='w-full font-bold text-slate-100 bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategorias/${categorias.id}`} className='text-stone-100 font-bold bg-rose-600 hover:bg-rose-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias