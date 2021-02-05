import React, {useEffect,useState} from 'react'
import {backend} from '../../../services/api'
import ListDesclassificados from './ListDesclassificados'
import {Pagination, SelectPicker, Input, InputGroup } from 'rsuite'

const Desclassificados = (props) => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [dataMaster, setDataMaster] = useState({})
    const [selectEmpresa, setSelectEmpresa] = useState('Selecione uma Empresa')
    const [type, setType] = useState('academico')
    const [linkedinID, setLinkedinID] = useState('')

    const dataEmpresa = 
        [
            {
            "label": "Acadêmico",
            "value": "academico",
            "role": "Master"
            },
            {
            "label": "Indústria",
            "value": "industria",
            "role": "Master"
            },
            {
            "label": "Governo",
            "value": "governo",
            "role": "Master"
            },
            {
            "label": "ONG",
            "value": "ong",
            "role": "Master"
            },
            {
            "label": "Outros",
            "value": "outros",
            "role": "Master"
          }]
    

    useEffect(()=>{
        handleDesclassificados(page)
    },[])

    const handleDesclassificados = async(page) =>{
        const res = await backend.get('employer/unclassified/' + page,{headers:{'Authentication-Token': localStorage.getItem('token')}})
        .then(res =>{
            setData(res.data.content)
            setDataMaster(res.data)
            console.log(res.data)
        })
        .catch(err =>{
            console.log(err)

        })
    }

    const handlePage = (eventKey) =>{
        setPage(eventKey-1)
        console.log(eventKey)
        handleDesclassificados(eventKey-1)
    }

    const handleInput = (input, link) =>{
        setSelectEmpresa(input)
        setLinkedinID(link)
    } 

    const handleSelect = (value) =>{
        setType(value)
    }

    const handleSubmit = () =>{
    {/** const res = backend.put('employer/' + type + '/' + linkedinID, {headers:{'Authentication-Token': localStorage.getItem('token')}}) 
        .then(res =>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })*/}
        let objeto ={
            'tipo':type,
            'linkedinID':linkedinID,
            'name':selectEmpresa
        }

        props.handleData(objeto)
    }



    return (
        <div>
            <div className={'mainDesclassificados'}>
                <div>
                <ListDesclassificados handleInput={handleInput} listData={data ? data :[]}/>
                    <hr></hr>
                </div>
                <div className={'selectEmpresa'}>
                    <Input style={{width:600}} disabled placeholder = {selectEmpresa}/>
                    <hr></hr>
                    <SelectPicker defaultValue={type} onSelect={handleSelect} data={dataEmpresa} style={{ width: 600 }} />
                    <hr></hr>
                    <button onClick={handleSubmit}>Associar</button>
                </div>
            </div>
            <div className ={'paginacao'}>
                <Pagination
                    pages={dataMaster.totalPages ? dataMaster.totalPages :0}
                    maxButtons={5}
                    onSelect ={handlePage}
                    activePage={page+1}
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                />
            </div>
        </div>
    )
}
export default Desclassificados