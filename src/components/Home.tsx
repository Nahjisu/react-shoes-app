import shoesData, { Shoes } from '../model/shoes'
import Menu from './Menu'
import ShoesComponent from '../components/ShoesComponent'
import db from '../firebase'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'

const Home: React.FC = () => {
    const [test, setTest] = useState<Shoes[]>([])
    useEffect(() => {
        // get data
        const shoesCollection = collection(db, 'shoes')
        const unSub = onSnapshot(shoesCollection, (snapShot) => {
            const updateShoes: Shoes[] = snapShot.docs.map(
                (doc) => doc.data() as Shoes
            )
            setTest(updateShoes)
        })
        return () => unSub()
    }, [])
    return (
        <div>
            <Menu />
            <div className="flex m-6">
                {shoesData.map((shoes, i) => (
                    <ShoesComponent shoes={shoes} index={i + 1} key={i} />
                ))}
            </div>

            <div>
                {test.map((item) => (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <h4>{item.price}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
