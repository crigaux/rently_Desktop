import { useEffect, useState } from 'react'
import { PropertySerializerRead } from '../../../api/index.ts'
import PropertyCard from '../../../components/organisms/PropertyCard.tsx'
import MapComponent from './MapComponent.tsx'

export default function PropertiesList({
  mapOpen,
  properties,
}: {
  mapOpen: boolean
  properties: PropertySerializerRead[]
}): JSX.Element {
  const [item, setItem] = useState<number | null>(
    properties.length ? (properties[0].property_id as number) : null,
  )

  const setItemToView = (itemId: number) => {
    setItem(itemId)
  }

  useEffect(() => {
    document
      .getElementById(String(item))
      ?.scrollIntoView({ behavior: 'smooth' })
  }, [item])

  return (
    <div
      className={`flex ${
        mapOpen ? 'md:h-[calc(100vh-200px)] w-full' : ''
      } justify-center transition-all duration-700 linear`}
    >
      <div
        className={`mapContainer ${
          mapOpen ? 'w-5/12 h-full' : 'w-0 h-full'
        } transition-all duration-700 linear h-full rounded-r-lg`}
      >
        <MapComponent
          properties={properties}
          markers={properties.map((property) => ({
            id: property.address_id as number,
            property_id: property.property_id as number,
            position: [Number(property.latitude), Number(property.longitude)],
          }))}
          height='100%'
          onClick={setItemToView}
        />
      </div>
      <div
        className={`flex justify-center pb-3 ${
          mapOpen ? 'md:w-6/12 overflow-scroll no-scrollbar' : 'w-full'
        }`}
      >
        <div
          className={`md:pl-4 pt-3 md:max-w-[1200px] w-full relative flex flex-col gap-4`}
        >
          {mapOpen && (
            <div className='topShadow w-11/12 absolute top-0 left-0 -mt-4'></div>
          )}
          {properties.length
            ? properties.map((property: PropertySerializerRead) => (
                <PropertyCard
                  key={property.property_id}
                  mapOpened={mapOpen}
                  property={property}
                />
              ))
            : ''}
        </div>
      </div>
    </div>
  )
}
