import '../css/HomePortfolioCard.css'

import Card from 'react-bootstrap/Card'

const HomePortfolioCard1 = () => {
    const cardInfo = [
        {
            image: require("../img/backgroundImg1.jpg"),
            title: "BMW",
            text: "HI"
        }
    ];
    const renderCard = (card, index) => {
        return (
            <>

            <br/>
            <Card className='homeportfoliocard-card-main'>
        <Card.Img  src={card.image} alt="" className='homeportfoliocard-card-img'/>
        <Card.ImgOverlay>
            {/* <Card.Title className='Card-Title1'>BMW</Card.Title>
            <Card.Text className='Card-Text1'>BMW 3 Series</Card.Text>
        <Card.Text className='Card-Text1-2'>BMW 더뉴 3시리즈 2022년형</Card.Text> */}
        </Card.ImgOverlay>
    </Card>
        </>
        );
    };

    return (
        <div>
            {cardInfo.map(renderCard)}
        </div>
    )
}
 
export default HomePortfolioCard1;