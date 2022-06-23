const players = ['Genri', 'Finch', 'Geralt', 'Ereshkigal']
const TABS = [
    {dataName: 1, title:'Tab1'},
    {dataName: 2, title:'Tab2'},
    {dataName: 3, title:'Tab3'}
]
function MyTestCode() {
    return(
        <ul className="TestUl">{players.map((players, index) => (
        <li key={index}>{players}</li>
        ))}
            
        </ul>
    )
}
export default MyTestCode