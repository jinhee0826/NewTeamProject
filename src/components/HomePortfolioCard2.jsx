import Card from 'react-bootstrap/Card'
import '../css/HomePortfolioCard.css';

const HomePortfolioCard2 = () => {
    const cardInfo = [
        {
            image: "",
            title: "BMW",
            text: "HI"
        }
    ];
    const renderCard = (card, index) => {
        return (
            <> 
            <br/>
            <Card className='homeportfoliocard-card-main'>
                <Card.Img  src={card.image} alt="Card image"/>
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
        <div className='homeportfoliocard-img-map'>
            {cardInfo.map(renderCard)}
        </div>
    )
}

export default HomePortfolioCard2;