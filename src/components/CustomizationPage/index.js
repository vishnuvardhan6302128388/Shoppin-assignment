import React, {useState} from 'react'
import CaseSelection from '../CaseSelection'
import SizeSelection from '../SizeSelection'
import BandSelection from '../BandSelection'
import WatchPreview from '../WatchPreview'
import PriceDisplay from '../PriceDisplay'
import {Link} from "react-router-dom"

import { AiOutlineRollback } from "react-icons/ai";

import "./index.css"

const cases = [
  {
    id: 1,
    name: 'Aluminum',
    image:
      'https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735174341/bjz0bjqc0rb6pxncibtz.jpg',
  },
  {
    id: 2,
    name: 'Titanium',
    image:
      '	https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735262829/pttraligm127klg78orv.png',
  },
] // Example data for cases, sizes, bands

const sizes=[43,44,46]
const bands=[
  {
    id:1,
    name:"Tan Alpine Loop",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735270294/ao2flwzrueoqqxkxskqm.jpg"
  },
  {
    id:2,
    name:"Navy Alpine Loop",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735270774/byvy8rb0rfywsvcylfwi.jpg"
  },{
    id:3,
    name:"Dark Green Alpine Loop",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735270783/zh1h1jftx0xiwwglbni5.jpg"
  },
  {
    id:4,
    name:"Green Trail Loop",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735270797/ricie3gy3mzqamcztfoj.jpg"
  },
  {
    id:5,
    name:"Blue Trail Loop",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735270811/ieews1kxepyoq7wkhqjw.jpg"
  },
  {
    id:6,
    name:"Black Trail Loop",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735270823/qvjrpvoxyufwmjo85rc8.jpg"
  },
  {
    id:7,
    name:"Navy Ocean Band",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735270834/ltgiuvusw9w8uwjo5ca7.jpg"
  },
  {
    id:8,
    name:"Black Ocean Band",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735270852/xxuzkugygyqo0y527cvu.jpg"
  },
  {
    id:9,
    name:"Gold Milanese Loop",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735271084/eh8amxabazw7qay63ews.jpg"
  },
  {
    id:10,
    name:"Natural Link Bracelet Kit",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735271096/kcqolmcmznfzs4inw4yw.jpg"
  },
  {
    id:11,
    name:"Chartreuse Braided Solo Loop",
    image:"https://res.cloudinary.com/dg3ufv9bj/image/upload/v1735271166/mzbxx7ex9bjjtoqmkbgd.jpg"
  }


]

const CustomizationPage = () => {
  const [selectedCase, setSelectedCase] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedBand, setSelectedBand] = useState(null)

  const handleCaseSelect = caseItem => setSelectedCase(caseItem)
  const handleSizeSelect = size => setSelectedSize(size)
  const handleBandSelect = band => setSelectedBand(band)

  const totalPrice = selectedCase && selectedSize ? 399 : 0

  return (
    <div className='customize-container'>
  
      <div className='top-container'>
         <Link to="/" className='backbtn'  ><AiOutlineRollback size={30}/></Link>
          <h1 className='heading'>Customize Your Apple Watch</h1>
       
        </div>
      <CaseSelection cases={cases} onCaseSelect={handleCaseSelect} />
      <SizeSelection
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeSelect={handleSizeSelect}
      />
      <BandSelection bands={bands} onBandSelect={handleBandSelect} />
      <WatchPreview watchConfig={{image: selectedCase?.image}} />
      <PriceDisplay price={totalPrice} />
      
    </div>
  )
}

export default CustomizationPage
