// rce -> React's class based component

import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

    articles= [
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Jenny Gross, Neil Vigdor",
          "title": "ABC Suspends Whoopi Goldberg Over Holocaust Comments - The New York Times",
          "description": "Ms. Goldberg’s comments, on Monday’s episode of “The View,” came amid growing ignorance about the Holocaust and rising antisemitism. She has apologized.",
          "url": "https://www.nytimes.com/2022/02/01/us/whoopi-goldberg-holocaust.html",
          "urlToImage": "https://static01.nyt.com/images/2022/02/01/multimedia/01whoopi-promo/01whoopi-promo-facebookJumbo.jpg",
          "publishedAt": "2022-02-02T04:18:48Z",
          "content": "On Mondays program, Ms. Goldberg had been discussing a Tennessee school districts recent decision to remove a Pulitzer Prize-winning graphic novel about the Holocaust from its curriculum when she mad… [+1575 chars]"
        },
        {
          "source": { "id": null, "name": "KABC-TV" },
          "author": "Tony Cabrera, Josh Haskell",
          "title": "Matthew Harris, suspect in shooting threats against UCLA, now in custody, Colorado authorities confirm - KABC-TV",
          "description": "Colorado law enforcement has confirmed the person who made threats of a possible shooting at UCLA, Matthew Harris, is now in custody.",
          "url": "https://abc7.com/ucla-shooting-threats-suspect-in-custody/11529518/",
          "urlToImage": "https://cdn.abcotvs.com/dip/images/11531040_020122-kabc-7pm-ucla-shooting-threat-vid-CC-vid.jpg?w=1600",
          "publishedAt": "2022-02-02T04:18:45Z",
          "content": "LOS ANGELES (KABC) -- A former UCLA lecturer was arrested Tuesday in Colorado after police say he emailed an 800-page document and posted videos threatening violence against the school.Matthew Christ… [+3360 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Helen Regan, CNN",
          "title": "Disaster-hit Tonga goes into lockdown after recording first local Covid cases - CNN",
          "description": "The Pacific island nation of Tonga has gone into lockdown after reporting its first community cases of Covid-19, weeks after a massive volcanic eruption and tsunami devastated parts of the archipelago.",
          "url": "https://www.cnn.com/2022/02/01/asia/tonga-lockdown-covid-volcano-intl-hnk/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220201180534-tonga-jan-27-super-tease.jpg",
          "publishedAt": "2022-02-02T03:44:00Z",
          "content": "(CNN)The Pacific island nation of Tonga has gone into lockdown after reporting its first community cases of Covid-19, weeks after a massive volcanic eruption and tsunami devastated parts of the archi… [+3914 chars]"
        },
        {
          "source": { "id": "the-washington-post", "name": "The Washington Post" },
          "author": "Antonio Olivo, Jasmine Hilton, Tom Jackman, Justin Wm. Moyer",
          "title": "Two officers fatally shot at Bridgewater College in Va. - The Washington Post",
          "description": "A suspect was taken into custody a short time later and charged with two counts of capital murder.",
          "url": "https://www.washingtonpost.com/dc-md-va/2022/02/01/bridgewater-college-reported-shooting/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CELBUQEDTYI6ZFI4DYGMG4R6KM.jpg&w=1440",
          "publishedAt": "2022-02-02T02:51:23Z",
          "content": "The college, located near Harrisonburg, identified the victims as campus police officer John Painter, 55, and campus safety officer J.J. Jefferson, 48. A message sent to the Bridgewater community sai… [+6849 chars]"
        },
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Jesse Green",
          "title": "‘MJ’ Review: Michael Jackson Musical Won’t Look in the Mirror - The New York Times",
          "description": "A new jukebox musical tells the story of Michael Jackson. Except for the big story.",
          "url": "https://www.nytimes.com/2022/02/01/theater/mj-musical-review.html",
          "urlToImage": "https://static01.nyt.com/images/2022/02/02/arts/01MJ-1/01MJ-1-facebookJumbo.jpg",
          "publishedAt": "2022-02-02T02:45:06Z",
          "content": "There are a lot of strange stories making the rounds, says a documentary filmmaker interviewing Michael Jackson.\r\nUnderstate much?\r\nMichael Jackson was such a magnet for strange stories that they nea… [+1207 chars]"
        },
        {
          "source": { "id": "the-verge", "name": "The Verge" },
          "author": "Cameron Faulkner",
          "title": "Resident Evil 4’s fan-built HD remaster is finally complete - The Verge",
          "description": "After seven years, a small team of modders has finished their exhaustive HD retouching of Capcom’s Resident Evil 4 on PC. It’s available to download now for free. Here’s how to install it on your PC.",
          "url": "https://www.theverge.com/2022/2/1/22911418/resident-evil-4-hd-project-remaster-release-date-install-download",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/9UZIbOjHV2F_7Dpn8Aa3ZxaiMG0=/0x232:3240x1928/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22363349/re4hdprojectlede.jpg",
          "publishedAt": "2022-02-02T02:17:40Z",
          "content": "Heres how to download and install it"
        },
        {
          "source": { "id": null, "name": "KARE11.com" },
          "author": "Bill Strande",
          "title": "1 student dead, another critically wounded in shooting outside Richfield school; 2 arrested - KARE11.com",
          "description": "Squads from multiple departments were dispatched to the South Education Center just after noon on reports of a shooting with injuries.",
          "url": "https://www.kare11.com/article/news/local/1-student-killed-another-injured-shooting-outside-richfield-school/89-3e77b3ca-ed16-4ae7-8661-751be3ab661d",
          "urlToImage": "https://media.kare11.com/assets/KARE/images/d151dffe-0f2b-42a7-80a3-3afc05c95290/d151dffe-0f2b-42a7-80a3-3afc05c95290_1140x641.jpg",
          "publishedAt": "2022-02-02T01:52:30Z",
          "content": "RICHFIELD, Minn. One student is dead and another is in critical condition after a shooting outside a school in Richfield Tuesday.\r\nAt a news conference Tuesday afternoon, Richfield Police Chief Jay H… [+9040 chars]"
        },
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Ben Shpigel",
          "title": "Tom Brady, 7-Time Super Bowl Champion, Retires After 22 Seasons - The New York Times",
          "description": "Brady walked away from professional football after a generation in which he and his teams redefined the N.F.L.’s notions of reliability, consistency and success.",
          "url": "https://www.nytimes.com/live/2022/02/01/sports/tom-brady-retires",
          "urlToImage": "https://static01.nyt.com/images/2022/02/01/sports/01brady-header-promo/01brady-header-promo-facebookJumbo.jpg",
          "publishedAt": "2022-02-02T01:38:32Z",
          "content": "Brady after beating the St. Louis Rams in Super Bowl XXXVI.Credit... Mike Segar/Reuters\r\nNot surprisingly, Tom Bradys time in the N.F.L. spotlight had an almost fairy-tale, prescient beginning. In a … [+2320 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Tom Lutz",
          "title": "Former Dolphins coach Flores sues NFL saying league is run ‘like a plantation’ - The Guardian",
          "description": "Former Miami Dolphins coach Brian Flores is suing three NFL teams and the league itself, which he claims is racially segregated",
          "url": "https://amp.theguardian.com/sport/2022/feb/01/brian-flores-sues-nfl-dolphins-broncos-giants-racism-black-head-coaches",
          "urlToImage": "https://i.guim.co.uk/img/media/87dd1ee7d031e2a9ddf47c8ea076d757675eb4d0/0_44_5684_3413/master/5684.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=766ad15a9d1dfc7b3ff57f51de6bc5b8",
          "publishedAt": "2022-02-02T01:08:00Z",
          "content": "Former Miami Dolphins head coach Brian Flores is suing three NFL teams and the league itself, which he claims is racially segregated and is managed much like a plantation.\r\nFlores, who is Black, was … [+4322 chars]"
        },
        {
          "source": { "id": null, "name": "WJLA" },
          "author": "Kevin Kuzminski, Greg Dailey",
          "title": "'Washington Commanders' banner spotted inside FedExField just hours before name reveal - WJLA",
          "description": "Just hours before the Washington Football Team will reveal its new mascot, logo and branding, SkyTrak 7 flew over FedexField and caught a glimpse of what could be. READ MORE: New name, new logo, new brand: Everything you need to know before the revealA banner…",
          "url": "https://wjla.com/news/local/washington-commanders-football-team-redskins-nfl-banner-snyder-spotted-inside-fedexfield-just-hours-before-name-reveal-hogs",
          "urlToImage": "https://wjla.com/resources/media/b34f1f33-6e83-41d7-abbb-d4eddc475b3f-large16x9_commanders.PNG?1643762827520",
          "publishedAt": "2022-02-02T00:57:23Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "Quartz India" },
          "author": "Scott Nover",
          "title": "Google is outdoing Apple and Tesla with a 20-for-1 stock split - Quartz",
          "description": "Based on current prices, the split will lower the cost of a Google shares to under $150 per share, down from $2,700.",
          "url": "https://qz.com/2120990/google-is-outdoing-apple-and-tesla-with-a-20-for-1-stock-split/",
          "urlToImage": "https://cms.qz.com/wp-content/uploads/2022/02/2019-01-18T130518Z_489220944_RC1CD079D0A0_RTRMADP_3_BRITAIN-GOOGLE-e1643760556316.jpg?quality=75&strip=all&w=1200&h=630&crop=1",
          "publishedAt": "2022-02-02T00:47:41Z",
          "content": "Alphabet, the parent company of Google, announced a 20-for-1 stock split along with its quarterly earnings report (pdf) on Feb. 1. Its only the second split for the stock since it went public in 2004… [+1413 chars]"
        },
        {
          "source": { "id": "fox-news", "name": "Fox News" },
          "author": "Jon Brown",
          "title": "Sen. Ben Ray Luján of New Mexico hospitalized after stroke - Fox News",
          "description": "Sen. Ben Ray Lujan, D-N.M., suffered a stroke last week and remains hospitalized but is expected to make a full recovery, his office announced Tuesday.",
          "url": "https://www.foxnews.com/politics/sen-ben-ray-lujan-hospitalized-after-stroke",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/02/GettyImages-1345211046.jpg",
          "publishedAt": "2022-02-02T00:13:58Z",
          "content": "Sen. Ben Ray Luján, D-N.M., suffered a stroke last week and remains hospitalized but is expected to make a full recovery, his office announced Tuesday.\r\nAfter experiencing dizziness and fatigue on Th… [+2162 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "Microsoft-Activision Blizzard Deal Will Be Investigated By the FTC - IGN Now - IGN",
          "description": "The US Federal Trade Commission (FTC) will reportedly be taking the reins on reviewing Microsoft's intended acquisition of Activision Blizzard - amid a more ...",
          "url": "https://www.youtube.com/watch?v=TzbVh4SvfQ8",
          "urlToImage": "https://i.ytimg.com/vi/TzbVh4SvfQ8/hqdefault.jpg",
          "publishedAt": "2022-02-02T00:08:42Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "Hollywood Reporter" },
          "author": "J. Clara Chan",
          "title": "Spotify’s Joe Rogan Mess Exposes Larger Rift Over Rules, Streaming Revenues - Hollywood Reporter",
          "description": "With a growing list of prominent artists and podcasters supporting Neil Young’s protest of Joe Rogan, Daniel Ek attempted some damage control. Dissenters began to include podcasters with business ties to Spotify: Brené Brown, who has two Spotify-exclusive sho…",
          "url": "https://www.hollywoodreporter.com/business/digital/spotify-joe-rogan-streaming-revenue-covid-review-1235085384/",
          "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/02/Spotify-Daniel-Ek-Samsung-Unveil-GettyImages-1013933224-H-2022.jpg?w=1024",
          "publishedAt": "2022-02-01T23:59:52Z",
          "content": "With a growing list of prominent artists and podcasters supporting Neil Young’s protest of Joe Rogan, Daniel Ek attempted some damage control.\r\nDissenters began to include podcasters with business ti… [+7393 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Jennifer Gray, CNN meteorologist",
          "title": "Next winter storm will stretch over 2,000 miles - CNN",
          "description": "As the second winter storm in less than a week sets up across the country, 21 states are gearing up for a blast of winter precipitation and dangerously cold temperatures.",
          "url": "https://www.cnn.com/2022/02/01/weather/winter-storm-ice-snow-midwest-south-northeast/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220201101556-weather-snow-ice-storm-card-super-tease.jpg",
          "publishedAt": "2022-02-01T23:24:00Z",
          "content": "(CNN)As the second winter storm in less than a week sets up across the country, 21 states are gearing up for a blast of winter precipitation and dangerously cold temperatures. \r\nMore than 90 million … [+6459 chars]"
        },
        {
          "source": { "id": null, "name": "Android Central" },
          "author": "Nicholas Sutrich",
          "title": "Google reveals a new Gmail interface that's no longer a crowded mess - Android Central",
          "description": "Meet, spaces, and chat are all great Gmail tools but they take up a lot of space. This new Gmail desktop UI update puts those tools in their own section, freeing up your screen for more email.",
          "url": "https://www.androidcentral.com/gmails-new-interface-no-longer-convoluted-mess",
          "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2022/02/gmail-app-light.jpg",
          "publishedAt": "2022-02-01T23:18:06Z",
          "content": "Any Gmail user who frequently checks their email on a laptop or desktop computer will know just how busy the interface can be. It seems Google agrees as a new interface will become available for all … [+1146 chars]"
        },
        {
          "source": { "id": "politico", "name": "Politico" },
          "author": null,
          "title": "GOP to Tucker Carlson: We're the decision-makers on Ukraine, not you - POLITICO",
          "description": "“He’s obviously not in a position of being responsible for those decisions. And we are,” said Sen. John Cornyn.",
          "url": "https://www.politico.com/news/2022/02/01/gop-tucker-carlson-ukraine-00004370",
          "urlToImage": "https://static.politico.com/71/ce/2d08d7db47bcae467097be520f68/gettyimages-1139127493.jpg",
          "publishedAt": "2022-02-01T23:03:38Z",
          "content": "In recent days, Carlson has attacked Republicans who are pushing for a stronger response to Moscows aggression slamming Sen. Joni Ernst (R-Iowa) as ignorant and Sen. Jim Risch (R-Idaho) as a moron ma… [+6431 chars]"
        },
        {
          "source": { "id": null, "name": "KY3" },
          "author": "Joe Hickman",
          "title": "What was that strange swirling light in the Ozarks sky on Monday night? - KY3",
          "description": "An explanation as to what many Ozarks residents saw Monday night in the night sky.",
          "url": "https://www.ky3.com/2022/02/01/what-was-that-strange-swirling-light-ozarks-sky-monday-night/",
          "urlToImage": "https://gray-ky3-prod.cdn.arcpublishing.com/resizer/LXTXOHI4ZhCCFT63sFeccJ0biUs=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/DE22ZL2ESBA35JLY2BSPDVL2JU.png",
          "publishedAt": "2022-02-01T22:47:00Z",
          "content": "SPRINGFIELD, Mo. (KY3) - Never seen anything like that!\r\nWow!\r\nHow cool is that?\r\nBut what is it?\r\nI dont know but its awesome!\r\nThose were just a few of the comments made by viewers who sent us cell… [+2508 chars]"
        },
        {
          "source": { "id": null, "name": "Gizmodo.com" },
          "author": "Mack DeGeurin",
          "title": "Here’s How to Save Wordle in Its Pure, Pre-NYT Form - Gizmodo",
          "description": "Users can save Wordle as an HTML file and play the game offline for over 2,000 days.",
          "url": "https://gizmodo.com/how-to-play-the-original-wordle-offline-1848463004",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cb74dde5643d5024ef05a9f0189b6058.jpg",
          "publishedAt": "2022-02-01T22:40:00Z",
          "content": "Users lamenting online word game Wordles decision to sell out to The New York Times this week may have at least one way to preserve the original games free, anti-money leaching spirit. Since Wordle r… [+3732 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Damian Carrington",
          "title": "Extreme heat in oceans ‘passed point of no return’ in 2014 - The Guardian",
          "description": "Formerly rare high temperatures now covering half of seas and devastating wildlife, study shows",
          "url": "https://amp.theguardian.com/environment/2022/feb/01/extreme-heat-oceans-passed-point-of-no-return-high-temperatures-wildlife-seas",
          "urlToImage": null,
          "publishedAt": "2022-02-01T22:00:00Z",
          "content": "OceansFormerly rare high temperatures now covering half of seas and devastating wildlife, study shows\r\nExtreme heat in the worlds oceans passed the point of no return in 2014 and has become the new n… [+4279 chars]"
        }
      ]

   //Below constructor will be called everytime an object of News component is created (in this case everytime News tag is used).
   constructor(){
    super(); // Here we are calling constructor of super class. Note this is mandatory call and if missed will throw an error.
    console.log("This is constructor from News compoenent");
    //this.state helps us in setting the current state inside constructor. We can also set state using this.props (as done in NewsItem.js). Since for any given NewsItem we won't be changing title and description, therefore we are not setting it as state, rather we are passing it as a prop (Refer NewsItem.js). Note: We can never change props.Although, We can change state by passing props.
    this.state={
        articles: this.articles,
        loading: false

    }
}

  render() {
    return (
    <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
            {/* In bootstrap there is grid of 12 columns. col-md-4 means that in medium devices width of one column will be equal to 4 columns. Therefore we will have 3 such columns of width of 4 columns(original bootstrap grid). Also we have given dummy values to title and description below for the time being. Here newsUrl below, will uniquely identify every news item, though we are yet to work on it. newsUrl="TODO" which is a dummy value assigned for now.*/}
            <div className="col-md-4">
            <NewsItem title="Title" description="Desc" imageurl="https://cdn.cnn.com/cnnnext/dam/assets/220201180534-tonga-jan-27-super-tease.jpg" newsUrl="TODO"></NewsItem> 
            </div>
            <div className="col-md-4">
            <NewsItem title="Title" description="Desc"></NewsItem>
            </div>
            <div className="col-md-4">
            <NewsItem title="Title" description="Desc"></NewsItem>
            </div>
        </div>
        
    </div>);
  }
}

export default News;
