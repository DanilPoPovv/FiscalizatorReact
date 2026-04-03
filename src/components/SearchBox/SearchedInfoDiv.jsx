export default function SearchedInfoDiv({totalSearchCount}){
    return (
        <div style={{padding : "5px 20px", color : "#80c0ff"}}>По выбранным критериям всего записей найдено: {totalSearchCount}</div>
    )
}