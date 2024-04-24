
import React, { useState } from 'react';
import './App.css';
import { FaSearch } from "react-icons/fa";
import { FaComputer,FaRegCircleQuestion } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { CiDollar } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  // Dynamic data for "My Saved Library" cards
  const staticCardsData = [
    { id: 1, style:"peach",icon:  "https://cdn-icons-png.flaticon.com/512/225/225932.png", title: 'My Saved Library 1',date:"21-04-2024" },
    { id: 2, style:"green",icon: ' https://cdn-icons-png.flaticon.com/512/225/225932.png', title: 'My Saved Library 2',date:"22-04-2024" },
    { id: 3, style:"lavender",icon: 'https://cdn-icons-png.flaticon.com/512/225/225932.png', title: 'My Saved Library 3',date:"23-04-2024" },
    { id: 4, style:"brown",icon: 'https://cdn-icons-png.flaticon.com/512/225/225932.png', title: 'My Saved Library 4',date:"24-04-2024" },
    { id: 5, style:"yellow",icon: 'https://cdn-icons-png.flaticon.com/512/225/225932.png', title: 'My Saved Library 5',date:"25-04-2024" },
  ];

  // Example data for the carousel
  const carouselData = [
    {
      id: 1,
      imgSrc: 'https://images.ctfassets.net/y88td1zx1ufe/6RU8jp0HgivF2r88CH55vs/435a254d426bfd9246b037a47e4e3faf/State-of-Private-Markets-Q4-and-2022-in-review.png',
      heading: 'State of Markets',
      paragraph: 'The market capitalisation of indian stocks crossed U$$ 4.5 trillion in January',
    },
    {
      id: 2,
      imgSrc: 'https://www.livemint.com/lm-img/img/2023/11/08/original/pg1lead_1699470208597.jpg',
      heading: 'The  Central Capex Surge',
      paragraph: 'The last few years have seen a very substantial step up in capital .',
    },
    {
      id: 3,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGA7UwP1fllp4l-kIpLVQvFkWPpcGA0os11ips8bodQ&s',
      heading: 'Direct Taxes and Buisness Cycle',
      paragraph:
        'The share of direct taxes in total tax collections of the central goverment is',
    },
    {
      id: 4,
      imgSrc: 'https://igzy.com/wp-content/uploads/2022/07/AI-and-ML.jpg',
      heading: 'Banking Monitor',
      paragraph: 'Credit growth has remained broadly stable in recent weeks at just',
    },
    {
      id: 5,
      imgSrc: 'https://okcredit-blog-images-prod.storage.googleapis.com/2021/07/financialanalysis1.jpg',
      heading: 'Financial Analysis',
      paragraph: 'The process of examining a companys performance in the context of its industry',
    },
    {
      id: 6,
      imgSrc: 'https://cdn.corporatefinanceinstitute.com/assets/govenment-spending.jpeg',
      heading: 'Government Spending',
      paragraph:
        'Government spending or government expenditure can be divided into three primary ',
    },
    {
      id: 7,
      imgSrc: 'https://blog.ipleaders.in/wp-content/uploads/2020/07/compliance-for-financial-service-provider.jpg',
      heading: 'Regulatory complaince',
      paragraph: 'Regulatory compliance is the process of complying with applicable laws, regulations, policies and procedures',
    },
    {
      id: 8,
      imgSrc: 'https://saspartners.com/wp-content/uploads/2023/02/WORLD-ECONOMIC-OUTLOOK-min-1.png',
      heading: 'Economic-outlook',
      paragraph:'A slight acceleration for advanced economies—where growth is expected to rise from 1.6 percent in 2023 ',
    },
    {
      id: 9,
      imgSrc: 'https://m.economictimes.com/thumb/msid-60373020,width-1200,height-900,resizemode-4,imgsize-921829/these-100-stocks-are-defying-market-trend-ready-to-rally.jpg',
      heading: 'Market trend',
      paragraph:
        'A market trend is a perceived tendency of the financial markets to move in a particular direction over tim',
    },
    {
      id: 10,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcSrIE-B4xjz6BSG7JFbrU2C8W_cmyWHpY3xnYTMixBA&s',
      heading: 'loan portfolio',
      paragraph: 'A loan portfolio is the totality of all loans issued by a bank or other financial institution to its customer',
    },
    {
      id: 11,
      imgSrc: 'https://www.dcg-consulting.com/media/1037/infrastructure.jpg',
      heading: 'Infrastracture Development',
      paragraph: 'It involves improvement of the quality of the various components of infrastructure, such as roads, power, ICT, water and sanitation',
    },
    {
      id: 12,
      imgSrc: 'https://www.wallstreetmojo.com/wp-content/uploads/2019/11/Investment-Strategies.jpg',
      heading: 'Investment Strategies',
      paragraph:
        'Growth investing focuses on selecting companies which are expected to grow at an above-average rate in the long term, even if the share price appears high.',
    },
    // Add more data as needed
  ]


  const [carouselIndex, setCarouselIndex] = useState(0)
  const [showAllCards, setShowAllCards] = useState(false)
  const cardsPerPage = 4

  const handleNext = () => {
    const lastIndex = carouselData.length - 1
    const newIndex = carouselIndex + cardsPerPage
    setCarouselIndex(newIndex <= lastIndex ? newIndex : 0)
  }

  const handlePrev = () => {
    const lastIndex = carouselData.length - 1
    const newIndex = carouselIndex - cardsPerPage
    setCarouselIndex(
      newIndex >= 0 ? newIndex : lastIndex - (lastIndex % cardsPerPage),
    )
  }

  const handleViewMore = () => {
    setShowAllCards(true)
    setCarouselIndex(0)
  }

  const handleViewLess = () => {
    setShowAllCards(false)
    setCarouselIndex(0)
  }

  // Example data for the recent releases
  const recentReleasesData = [
    {
      id: 1,
      main:" Industrial Production",
      country: 'USA',
      date: 'March 12, 2024',
      heading: 'Release in USA',
      paragraph: 'The Industrial Production Index (IPI) came to a value of 102.6 in the United States.',
    },
    {
      id: 2,
      main:"Manufacturing Output",
      country: 'UK',
      date: 'January 18, 2024',
      heading: 'Release in UK',
      paragraph:
        'A compound annual growth rate of 3.33% is expected (CAGR 2024–2028). Output in the Manufacturing market is projected to amount to US$737.30bn.',
    },
    {
      id: 3,
      main:"Industrial Production",
      country: 'India',
      date: 'February 12, 2024',
      heading: 'Release in India',
      paragraph: ' The Quick Estimates of Index of Industrial Production (IIP) with base 2011-12 stands at 147.2.',
    },
    {
      id: 4,
      main:"Capacity Utilization",
      country: 'India',
      date: 'April 22, 2024',
      heading: 'Release in India',
      paragraph:
        'Indias thermal power plants expected to operate at 68% capacity due to rising electricity demand from industrial and commercial sectors.',
    },
    {
      id: 5,
      main:"Utility Output",
      country: 'USA',
      date: 'April 20,2024',
      heading: 'Release in USA',
      paragraph: 'Monthly production output was estimated to have fallen by 0.2% in January 2024; this follows a rise 0.6% in 2024',
    },
    {
      id: 6,
      main:"Cost of Living",
      country: 'UK',
      date: 'March 19,2024',
      heading: 'Release in UK',
      paragraph:
        'The average cost of living in UK as a family of four is around $3,135(£2,268) without house rent.',
    },
    {
      id: 7,
      main:"Deflation Risk",
      country: 'Australia',
      date: 'Feb 29,2024',
      heading: 'Release in Australia',
      paragraph: 'Overall, global growth in 2024 is likely to be around 2.5%, down from 3% in 2023. Australian growth is expected to slow to 1.5% with very weak, possibly mild recession',
    },
    {
      id: 8,
      main:"Consumer Spending",
      country: 'UK',
      date: 'March 30,2024',
      heading: 'Release in UK',
      paragraph:
        ' the EY ITEM Clubs GDP expectations with consumer spending growth also anticipated to rise to 0.9% in 2024, up from 0.7% projected in the Autumn Forecast.',
    },
    {
      id: 9,
      main:"CPI Inflation",
      country: 'India',
      date: 'April 25,2024',
      heading: 'Release in India',
      paragraph: 'Indias retail inflation, measured by the Consumer Price Index (CPI), eased to 4.85% in March 2024 from 5.09% in February, according to the latest Ministry Of Statistics and Programme Implementation data. The CPI was at 5.10% in April',
    },
    {
      id: 10,
      main:"Production Index",
      country: 'UK',
      date: 'April 21, 2024',
      heading: 'Release in UK',
      paragraph:
        'Monthly production output was estimated to have risen by 1.1% in February 2024; this follows a revised fall of 0.3% (revised down 0.1 percentage points) in January 2024.',
    },
    // Add more data as needed
  ]
  const [selectedCountry, setSelectedCountry] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const handleChange = event => {
    const country = event.target.value
    setSelectedCountry(country)
    if (country === '') {
      setFilteredData([]) // Reset filteredData to an empty array when no country is selected
    } else {
      const filtered = recentReleasesData.filter(
        card => card.country === country,
      )
      setFilteredData(filtered)
    }
  }

  return (
    <div className="App">
      {/* Header */}
      <div className="header" style={{ backgroundColor: '#333A73' }}>
      <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? 'A' : 'A'}
        </button>
        <div className="header" >
        <div className="greeting"><h3 class="h3">Good Afternoon, Aseena</h3> <p class='p1'> You are subscribed to Retail plan</p></div>
        <div className="date-time">
        <div className="datetime"> <SlCalender/> Today, 24April < FaClock/> 10:00 </div>
        <div className="bellicon"><FaBell/></div>
        </div>
        </div>
      </div>

      {/* Static Cards */}
      <div className="background">
     
      <div className="static-cards">
        {/* Display Static Cards */}
        {staticCardsData.map(card => (
          <div key={card.id} className="static-card">
            <span className={`icon border style ${card.icon}`}> <img src={card.icon} className="icons" alt="icon"/></span>
            <span className="title">{card.title}</span>
            <span classname="date">{card.date }</span>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="toggle-btn" onClick={toggleSidebar}>A</div>
          <div className="sidebar-links">
            <div className="link"> <FaSearch/></div>
            <div className="link"> <FaComputer/></div>
            <div className="link"> <FaRegCircleQuestion/></div>
            <div className="link">< SlCalender/></div>
            <div className="link"><HiBuildingOffice2/></div>
            <div className="link"> < CiDollar /></div>
            <div className="link"> <FaHeadphones/></div>
            <div className="link settings"> < IoMdSettings/></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
    
      <div className="main-content">
        {/* Carousel */}
        <div className="carousel">
        {/* Display Carousel Cards */}
        {carouselData
          .slice(
            carouselIndex,
            showAllCards ? carouselData.length : carouselIndex + cardsPerPage,
          )
          .map(card => (
            <div key={card.id} className="carousel-card">
              <div  className="image">
              <img src={card.imgSrc} alt={card.heading}/>
              </div>
              <h3 className="head">{card.heading}</h3>
              <p className="para">{card.paragraph}</p>
            </div>
          ))}
        {/* Next and Previous Buttons */}
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
      {!showAllCards && (
        <button className="view-more-btn" onClick={handleViewMore}>
          View More
        </button>
      )}
      {showAllCards && (
        <button className="view-less-btn" onClick={handleViewLess}>
          View Less
        </button>
      )}
        {/* Previous and Next Arrows */}
      </div>
   
      {/* Recent Releases */}
      <div className="recent-releases">
        <div className="combined">
        <h2 className="heading">Recent Releases</h2>
        {/* Dropdown Select */}
        <select value={selectedCountry} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
        </div>
        <hr/>
        {/* Display Filtered Cards */}
        <div className="filtered-cards">
          {selectedCountry &&
            filteredData.map(card => (
              <div key={card.id} className="filtered-card">
                <p className="date-color">{card.date}</p>
                <h4 >{card.main}</h4>
                <p>{card.paragraph}</p>
              </div>
            ))}
        </div>
      </div>
      </div>
    </div>
    
  );
}

export default App;
