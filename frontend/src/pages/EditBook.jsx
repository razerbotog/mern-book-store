import React, {useState, useEffect} from 'react'
import axios from 'axios'
import BackBottom from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const EditBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const {enqueueSnackbar} = useSnackbar()
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/books/${id}`)
    .then((response)=>{
      setTitle(response.data.title)
      setAuthor(response.data.author)
      setPublishYear(response.data.publishYear)
      setLoading(false)
    }).catch((error)=>{
      setLoading(false)
      console.log("Error from useEffect", error)
    })
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true)
    axios.put(`http://localhost:3000/books/${id}`, data)
    .then((response)=>{
      setLoading(false)
      enqueueSnackbar('Book Edited Successfully', {variant: 'success'})
      navigate('/')
    }).catch((error)=>{
      setLoading(false)
      enqueueSnackbar('Error', {variant: 'error'})
      console.log(error);
    })
  }

  return (
    <div className='p-4'>
      <BackBottom/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className='border border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)} className='border border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
            <input type="text" value={publishYear} onChange={(e)=> setPublishYear(e.target.value)} className='border border-gray-500 px-4 py-2 w-full'/>
        </div>
       <button className='p-2 bg-sky-200 m-8' onClick={handleEditBook}>Edit Book</button>
      </div>
    </div>
  )
}

export default EditBook