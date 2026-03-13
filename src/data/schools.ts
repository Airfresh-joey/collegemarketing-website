export interface School {
  name: string
  slug: string
  city: string
  type: 'public' | 'private'
}

export interface StateData {
  name: string
  slug: string
  abbreviation: string
  schools: School[]
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function s(name: string, city: string, type: 'public' | 'private' = 'public'): School {
  return { name, slug: slugify(name), city, type }
}

export const states: StateData[] = [
  {
    name: 'Alabama', slug: 'alabama', abbreviation: 'AL',
    schools: [
      s('University of Alabama', 'Tuscaloosa'), s('Auburn University', 'Auburn'),
      s('University of Alabama at Birmingham', 'Birmingham'), s('University of South Alabama', 'Mobile'),
      s('Alabama A&M University', 'Huntsville'), s('Troy University', 'Troy'),
      s('University of North Alabama', 'Florence'), s('Jacksonville State University', 'Jacksonville'),
      s('Samford University', 'Birmingham', 'private'), s('University of Alabama in Huntsville', 'Huntsville'),
      s('Alabama State University', 'Montgomery'), s('University of Montevallo', 'Montevallo'),
      s('University of West Alabama', 'Livingston'), s('Spring Hill College', 'Mobile', 'private'),
      s('Birmingham-Southern College', 'Birmingham', 'private'), s('Tuskegee University', 'Tuskegee', 'private'),
      s('Miles College', 'Fairfield', 'private'), s('Stillman College', 'Tuscaloosa', 'private'),
    ]
  },
  {
    name: 'Alaska', slug: 'alaska', abbreviation: 'AK',
    schools: [
      s('University of Alaska Anchorage', 'Anchorage'), s('University of Alaska Fairbanks', 'Fairbanks'),
      s('University of Alaska Southeast', 'Juneau'), s('Alaska Pacific University', 'Anchorage', 'private'),
    ]
  },
  {
    name: 'Arizona', slug: 'arizona', abbreviation: 'AZ',
    schools: [
      s('Arizona State University', 'Tempe'), s('University of Arizona', 'Tucson'),
      s('Northern Arizona University', 'Flagstaff'), s('Grand Canyon University', 'Phoenix', 'private'),
      s('Embry-Riddle Aeronautical University', 'Prescott', 'private'),
      s('Arizona Christian University', 'Glendale', 'private'),
      s('Ottawa University Arizona', 'Surprise', 'private'),
      s('Prescott College', 'Prescott', 'private'),
      s('University of Advancing Technology', 'Tempe', 'private'),
      s('Pima Community College', 'Tucson'),
      s('Mesa Community College', 'Mesa'), s('Scottsdale Community College', 'Scottsdale'),
      s('Chandler-Gilbert Community College', 'Chandler'), s('Glendale Community College', 'Glendale'),
      s('Phoenix College', 'Phoenix'), s('Rio Salado College', 'Tempe'),
      s('South Mountain Community College', 'Phoenix'), s('Gateway Community College', 'Phoenix'),
      s('Estrella Mountain Community College', 'Avondale'), s('Paradise Valley Community College', 'Phoenix'),
      s('Cochise College', 'Sierra Vista'), s('Yavapai College', 'Prescott'),
      s('Mohave Community College', 'Kingman'), s('Central Arizona College', 'Coolidge'),
    ]
  },
  {
    name: 'Arkansas', slug: 'arkansas', abbreviation: 'AR',
    schools: [
      s('University of Arkansas', 'Fayetteville'), s('Arkansas State University', 'Jonesboro'),
      s('University of Central Arkansas', 'Conway'), s('University of Arkansas at Little Rock', 'Little Rock'),
      s('Henderson State University', 'Arkadelphia'), s('Harding University', 'Searcy', 'private'),
      s('John Brown University', 'Siloam Springs', 'private'), s('Ouachita Baptist University', 'Arkadelphia', 'private'),
      s('University of Arkansas at Pine Bluff', 'Pine Bluff'), s('Arkansas Tech University', 'Russellville'),
      s('Southern Arkansas University', 'Magnolia'), s('Hendrix College', 'Conway', 'private'),
      s('Lyon College', 'Batesville', 'private'), s('Philander Smith University', 'Little Rock', 'private'),
    ]
  },
  {
    name: 'California', slug: 'california', abbreviation: 'CA',
    schools: [
      s('University of Southern California', 'Los Angeles', 'private'),
      s('University of California Los Angeles', 'Los Angeles'),
      s('University of California Berkeley', 'Berkeley'),
      s('Stanford University', 'Stanford', 'private'),
      s('California Institute of Technology', 'Pasadena', 'private'),
      s('University of California San Diego', 'San Diego'),
      s('University of California Davis', 'Davis'),
      s('University of California Santa Barbara', 'Santa Barbara'),
      s('University of California Irvine', 'Irvine'),
      s('University of California Santa Cruz', 'Santa Cruz'),
      s('University of California Riverside', 'Riverside'),
      s('University of California Merced', 'Merced'),
      s('San Diego State University', 'San Diego'),
      s('San Jose State University', 'San Jose'),
      s('San Francisco State University', 'San Francisco'),
      s('California State University Long Beach', 'Long Beach'),
      s('California State University Fullerton', 'Fullerton'),
      s('California State University Northridge', 'Northridge'),
      s('California Polytechnic State University', 'San Luis Obispo'),
      s('California State Polytechnic University Pomona', 'Pomona'),
      s('California State University Sacramento', 'Sacramento'),
      s('California State University Fresno', 'Fresno'),
      s('California State University Chico', 'Chico'),
      s('Humboldt State University', 'Arcata'),
      s('California State University San Bernardino', 'San Bernardino'),
      s('California State University Bakersfield', 'Bakersfield'),
      s('California State University Dominguez Hills', 'Carson'),
      s('California State University East Bay', 'Hayward'),
      s('California State University Los Angeles', 'Los Angeles'),
      s('California State University Monterey Bay', 'Seaside'),
      s('California State University San Marcos', 'San Marcos'),
      s('California State University Stanislaus', 'Turlock'),
      s('California State University Channel Islands', 'Camarillo'),
      s('Sonoma State University', 'Rohnert Park'),
      s('Loyola Marymount University', 'Los Angeles', 'private'),
      s('Pepperdine University', 'Malibu', 'private'),
      s('University of San Diego', 'San Diego', 'private'),
      s('University of San Francisco', 'San Francisco', 'private'),
      s('Santa Clara University', 'Santa Clara', 'private'),
      s('Chapman University', 'Orange', 'private'),
      s('University of the Pacific', 'Stockton', 'private'),
      s('Claremont McKenna College', 'Claremont', 'private'),
      s('Pomona College', 'Claremont', 'private'),
      s('Harvey Mudd College', 'Claremont', 'private'),
      s('Occidental College', 'Los Angeles', 'private'),
      s('University of Redlands', 'Redlands', 'private'),
      s('Azusa Pacific University', 'Azusa', 'private'),
      s('Biola University', 'La Mirada', 'private'),
      s('Point Loma Nazarene University', 'San Diego', 'private'),
      s('Whittier College', 'Whittier', 'private'),
      s('California Lutheran University', 'Thousand Oaks', 'private'),
      s('Mills College', 'Oakland', 'private'),
      s('Dominican University of California', 'San Rafael', 'private'),
      s('Fresno Pacific University', 'Fresno', 'private'),
      s('La Sierra University', 'Riverside', 'private'),
      s('Woodbury University', 'Burbank', 'private'),
      s('Art Center College of Design', 'Pasadena', 'private'),
      s('Otis College of Art and Design', 'Los Angeles', 'private'),
      s('California College of the Arts', 'San Francisco', 'private'),
      s('Academy of Art University', 'San Francisco', 'private'),
      s('National University', 'San Diego', 'private'),
      s('Alliant International University', 'San Diego', 'private'),
      s('Vanguard University', 'Costa Mesa', 'private'),
      s('Westmont College', 'Santa Barbara', 'private'),
      s('Scripps College', 'Claremont', 'private'),
      s('Pitzer College', 'Claremont', 'private'),
    ]
  },
  {
    name: 'Colorado', slug: 'colorado', abbreviation: 'CO',
    schools: [
      s('University of Colorado Boulder', 'Boulder'), s('Colorado State University', 'Fort Collins'),
      s('University of Denver', 'Denver', 'private'), s('University of Colorado Denver', 'Denver'),
      s('Colorado School of Mines', 'Golden'), s('Colorado College', 'Colorado Springs', 'private'),
      s('University of Northern Colorado', 'Greeley'), s('Metropolitan State University of Denver', 'Denver'),
      s('Regis University', 'Denver', 'private'), s('University of Colorado Colorado Springs', 'Colorado Springs'),
      s('Fort Lewis College', 'Durango'), s('Adams State University', 'Alamosa'),
      s('Western Colorado University', 'Gunnison'), s('Colorado Mesa University', 'Grand Junction'),
      s('Colorado Christian University', 'Lakewood', 'private'),
    ]
  },
  {
    name: 'Connecticut', slug: 'connecticut', abbreviation: 'CT',
    schools: [
      s('Yale University', 'New Haven', 'private'), s('University of Connecticut', 'Storrs'),
      s('Wesleyan University', 'Middletown', 'private'), s('Trinity College', 'Hartford', 'private'),
      s('Connecticut College', 'New London', 'private'), s('Quinnipiac University', 'Hamden', 'private'),
      s('Fairfield University', 'Fairfield', 'private'), s('Sacred Heart University', 'Fairfield', 'private'),
      s('University of Hartford', 'West Hartford', 'private'), s('Central Connecticut State University', 'New Britain'),
      s('Southern Connecticut State University', 'New Haven'), s('Eastern Connecticut State University', 'Willimantic'),
      s('Western Connecticut State University', 'Danbury'), s('University of New Haven', 'West Haven', 'private'),
      s('University of Bridgeport', 'Bridgeport', 'private'), s('University of Saint Joseph', 'West Hartford', 'private'),
    ]
  },
  {
    name: 'Delaware', slug: 'delaware', abbreviation: 'DE',
    schools: [
      s('University of Delaware', 'Newark'), s('Delaware State University', 'Dover'),
      s('Wilmington University', 'New Castle', 'private'), s('Wesley College', 'Dover', 'private'),
      s('Goldey-Beacom College', 'Wilmington', 'private'),
    ]
  },
  {
    name: 'Florida', slug: 'florida', abbreviation: 'FL',
    schools: [
      s('University of Florida', 'Gainesville'), s('Florida State University', 'Tallahassee'),
      s('University of Central Florida', 'Orlando'), s('University of South Florida', 'Tampa'),
      s('Florida International University', 'Miami'), s('University of Miami', 'Coral Gables', 'private'),
      s('Florida Atlantic University', 'Boca Raton'), s('Florida Gulf Coast University', 'Fort Myers'),
      s('University of North Florida', 'Jacksonville'), s('University of West Florida', 'Pensacola'),
      s('Florida A&M University', 'Tallahassee'), s('Stetson University', 'DeLand', 'private'),
      s('Rollins College', 'Winter Park', 'private'), s('University of Tampa', 'Tampa', 'private'),
      s('Nova Southeastern University', 'Fort Lauderdale', 'private'),
      s('Jacksonville University', 'Jacksonville', 'private'), s('Barry University', 'Miami Shores', 'private'),
      s('Embry-Riddle Aeronautical University', 'Daytona Beach', 'private'),
      s('Bethune-Cookman University', 'Daytona Beach', 'private'),
      s('Florida Polytechnic University', 'Lakeland'),
      s('New College of Florida', 'Sarasota'), s('Eckerd College', 'St. Petersburg', 'private'),
      s('Flagler College', 'St. Augustine', 'private'), s('Palm Beach Atlantic University', 'West Palm Beach', 'private'),
      s('Lynn University', 'Boca Raton', 'private'), s('Ringling College of Art and Design', 'Sarasota', 'private'),
      s('Southeastern University', 'Lakeland', 'private'), s('Saint Leo University', 'Saint Leo', 'private'),
      s('Florida Southern College', 'Lakeland', 'private'), s('Edward Waters University', 'Jacksonville', 'private'),
    ]
  },
  {
    name: 'Georgia', slug: 'georgia', abbreviation: 'GA',
    schools: [
      s('University of Georgia', 'Athens'), s('Georgia Institute of Technology', 'Atlanta'),
      s('Georgia State University', 'Atlanta'), s('Emory University', 'Atlanta', 'private'),
      s('Kennesaw State University', 'Kennesaw'), s('Georgia Southern University', 'Statesboro'),
      s('Augusta University', 'Augusta'), s('University of West Georgia', 'Carrollton'),
      s('Valdosta State University', 'Valdosta'), s('Mercer University', 'Macon', 'private'),
      s('Savannah College of Art and Design', 'Savannah', 'private'), s('Spelman College', 'Atlanta', 'private'),
      s('Morehouse College', 'Atlanta', 'private'), s('Clark Atlanta University', 'Atlanta', 'private'),
      s('Oglethorpe University', 'Atlanta', 'private'), s('Berry College', 'Mount Berry', 'private'),
      s('Agnes Scott College', 'Decatur', 'private'), s('Columbus State University', 'Columbus'),
      s('Georgia College & State University', 'Milledgeville'), s('Albany State University', 'Albany'),
      s('Fort Valley State University', 'Fort Valley'), s('Savannah State University', 'Savannah'),
    ]
  },
  {
    name: 'Hawaii', slug: 'hawaii', abbreviation: 'HI',
    schools: [
      s('University of Hawaii at Manoa', 'Honolulu'), s('University of Hawaii at Hilo', 'Hilo'),
      s('Hawaii Pacific University', 'Honolulu', 'private'), s('Chaminade University of Honolulu', 'Honolulu', 'private'),
      s('Brigham Young University Hawaii', 'Laie', 'private'),
    ]
  },
  {
    name: 'Idaho', slug: 'idaho', abbreviation: 'ID',
    schools: [
      s('Boise State University', 'Boise'), s('University of Idaho', 'Moscow'),
      s('Idaho State University', 'Pocatello'), s('Northwest Nazarene University', 'Nampa', 'private'),
      s('College of Idaho', 'Caldwell', 'private'), s('Brigham Young University Idaho', 'Rexburg', 'private'),
      s('Lewis-Clark State College', 'Lewiston'),
    ]
  },
  {
    name: 'Illinois', slug: 'illinois', abbreviation: 'IL',
    schools: [
      s('University of Illinois Urbana-Champaign', 'Champaign'),
      s('Northwestern University', 'Evanston', 'private'),
      s('University of Chicago', 'Chicago', 'private'),
      s('University of Illinois Chicago', 'Chicago'),
      s('Illinois State University', 'Normal'),
      s('Southern Illinois University Carbondale', 'Carbondale'),
      s('Northern Illinois University', 'DeKalb'),
      s('DePaul University', 'Chicago', 'private'),
      s('Loyola University Chicago', 'Chicago', 'private'),
      s('Illinois Institute of Technology', 'Chicago', 'private'),
      s('Bradley University', 'Peoria', 'private'),
      s('Eastern Illinois University', 'Charleston'),
      s('Western Illinois University', 'Macomb'),
      s('Southern Illinois University Edwardsville', 'Edwardsville'),
      s('University of Illinois Springfield', 'Springfield'),
      s('Millikin University', 'Decatur', 'private'),
      s('Knox College', 'Galesburg', 'private'),
      s('Wheaton College', 'Wheaton', 'private'),
      s('North Central College', 'Naperville', 'private'),
      s('Augustana College', 'Rock Island', 'private'),
      s('Lake Forest College', 'Lake Forest', 'private'),
      s('Illinois Wesleyan University', 'Bloomington', 'private'),
      s('Columbia College Chicago', 'Chicago', 'private'),
      s('Roosevelt University', 'Chicago', 'private'),
      s('Elmhurst University', 'Elmhurst', 'private'),
      s('North Park University', 'Chicago', 'private'),
      s('Benedictine University', 'Lisle', 'private'),
      s('Governors State University', 'University Park'),
    ]
  },
  {
    name: 'Indiana', slug: 'indiana', abbreviation: 'IN',
    schools: [
      s('Indiana University Bloomington', 'Bloomington'), s('Purdue University', 'West Lafayette'),
      s('University of Notre Dame', 'Notre Dame', 'private'), s('Ball State University', 'Muncie'),
      s('Indiana State University', 'Terre Haute'), s('Butler University', 'Indianapolis', 'private'),
      s('Valparaiso University', 'Valparaiso', 'private'), s('University of Evansville', 'Evansville', 'private'),
      s('DePauw University', 'Greencastle', 'private'), s('Rose-Hulman Institute of Technology', 'Terre Haute', 'private'),
      s('Wabash College', 'Crawfordsville', 'private'), s('Hanover College', 'Hanover', 'private'),
      s('Indiana University-Purdue University Indianapolis', 'Indianapolis'),
      s('University of Indianapolis', 'Indianapolis', 'private'),
      s('Anderson University', 'Anderson', 'private'), s('Franklin College', 'Franklin', 'private'),
      s('Marian University', 'Indianapolis', 'private'), s('University of Southern Indiana', 'Evansville'),
      s('Indiana Wesleyan University', 'Marion', 'private'), s('Purdue University Fort Wayne', 'Fort Wayne'),
    ]
  },
  {
    name: 'Iowa', slug: 'iowa', abbreviation: 'IA',
    schools: [
      s('University of Iowa', 'Iowa City'), s('Iowa State University', 'Ames'),
      s('University of Northern Iowa', 'Cedar Falls'), s('Drake University', 'Des Moines', 'private'),
      s('Grinnell College', 'Grinnell', 'private'), s('Coe College', 'Cedar Rapids', 'private'),
      s('Luther College', 'Decorah', 'private'), s('Cornell College', 'Mount Vernon', 'private'),
      s('Simpson College', 'Indianola', 'private'), s('Central College', 'Pella', 'private'),
      s('Wartburg College', 'Waverly', 'private'), s('Loras College', 'Dubuque', 'private'),
      s('Morningside University', 'Sioux City', 'private'), s('Buena Vista University', 'Storm Lake', 'private'),
    ]
  },
  {
    name: 'Kansas', slug: 'kansas', abbreviation: 'KS',
    schools: [
      s('University of Kansas', 'Lawrence'), s('Kansas State University', 'Manhattan'),
      s('Wichita State University', 'Wichita'), s('Emporia State University', 'Emporia'),
      s('Fort Hays State University', 'Hays'), s('Pittsburg State University', 'Pittsburg'),
      s('Washburn University', 'Topeka'), s('Baker University', 'Baldwin City', 'private'),
      s('Benedictine College', 'Atchison', 'private'), s('Friends University', 'Wichita', 'private'),
      s('McPherson College', 'McPherson', 'private'), s('Ottawa University', 'Ottawa', 'private'),
    ]
  },
  {
    name: 'Kentucky', slug: 'kentucky', abbreviation: 'KY',
    schools: [
      s('University of Kentucky', 'Lexington'), s('University of Louisville', 'Louisville'),
      s('Western Kentucky University', 'Bowling Green'), s('Eastern Kentucky University', 'Richmond'),
      s('Murray State University', 'Murray'), s('Northern Kentucky University', 'Highland Heights'),
      s('Morehead State University', 'Morehead'), s('Centre College', 'Danville', 'private'),
      s('Transylvania University', 'Lexington', 'private'), s('Berea College', 'Berea', 'private'),
      s('Bellarmine University', 'Louisville', 'private'), s('Asbury University', 'Wilmore', 'private'),
      s('Georgetown College', 'Georgetown', 'private'), s('Kentucky State University', 'Frankfort'),
    ]
  },
  {
    name: 'Louisiana', slug: 'louisiana', abbreviation: 'LA',
    schools: [
      s('Louisiana State University', 'Baton Rouge'), s('Tulane University', 'New Orleans', 'private'),
      s('University of Louisiana at Lafayette', 'Lafayette'), s('Louisiana Tech University', 'Ruston'),
      s('University of New Orleans', 'New Orleans'), s('McNeese State University', 'Lake Charles'),
      s('Northwestern State University', 'Natchitoches'), s('Southeastern Louisiana University', 'Hammond'),
      s('Nicholls State University', 'Thibodaux'), s('Grambling State University', 'Grambling'),
      s('Southern University', 'Baton Rouge'), s('Xavier University of Louisiana', 'New Orleans', 'private'),
      s('Loyola University New Orleans', 'New Orleans', 'private'), s('Dillard University', 'New Orleans', 'private'),
      s('Centenary College of Louisiana', 'Shreveport', 'private'),
    ]
  },
  {
    name: 'Maine', slug: 'maine', abbreviation: 'ME',
    schools: [
      s('University of Maine', 'Orono'), s('Bowdoin College', 'Brunswick', 'private'),
      s('Bates College', 'Lewiston', 'private'), s('Colby College', 'Waterville', 'private'),
      s('University of Southern Maine', 'Portland'), s('University of New England', 'Biddeford', 'private'),
      s('Husson University', 'Bangor', 'private'), s('Saint Joseph\'s College of Maine', 'Standish', 'private'),
      s('College of the Atlantic', 'Bar Harbor', 'private'), s('Unity College', 'Unity', 'private'),
    ]
  },
  {
    name: 'Maryland', slug: 'maryland', abbreviation: 'MD',
    schools: [
      s('University of Maryland College Park', 'College Park'),
      s('Johns Hopkins University', 'Baltimore', 'private'),
      s('University of Maryland Baltimore County', 'Baltimore'),
      s('Towson University', 'Towson'), s('Salisbury University', 'Salisbury'),
      s('Frostburg State University', 'Frostburg'), s('Bowie State University', 'Bowie'),
      s('Coppin State University', 'Baltimore'), s('Morgan State University', 'Baltimore'),
      s('University of Baltimore', 'Baltimore'), s('Loyola University Maryland', 'Baltimore', 'private'),
      s('Goucher College', 'Towson', 'private'), s('McDaniel College', 'Westminster', 'private'),
      s('Hood College', 'Frederick', 'private'), s('Washington College', 'Chestertown', 'private'),
      s('St. Mary\'s College of Maryland', 'St. Mary\'s City'),
      s('Mount St. Mary\'s University', 'Emmitsburg', 'private'),
      s('Stevenson University', 'Stevenson', 'private'),
    ]
  },
  {
    name: 'Massachusetts', slug: 'massachusetts', abbreviation: 'MA',
    schools: [
      s('Harvard University', 'Cambridge', 'private'), s('Massachusetts Institute of Technology', 'Cambridge', 'private'),
      s('Boston University', 'Boston', 'private'), s('Boston College', 'Chestnut Hill', 'private'),
      s('Northeastern University', 'Boston', 'private'), s('Tufts University', 'Medford', 'private'),
      s('Brandeis University', 'Waltham', 'private'), s('University of Massachusetts Amherst', 'Amherst'),
      s('University of Massachusetts Boston', 'Boston'), s('University of Massachusetts Lowell', 'Lowell'),
      s('University of Massachusetts Dartmouth', 'Dartmouth'),
      s('Williams College', 'Williamstown', 'private'), s('Amherst College', 'Amherst', 'private'),
      s('Wellesley College', 'Wellesley', 'private'), s('Smith College', 'Northampton', 'private'),
      s('Mount Holyoke College', 'South Hadley', 'private'), s('Holy Cross', 'Worcester', 'private'),
      s('Clark University', 'Worcester', 'private'), s('Worcester Polytechnic Institute', 'Worcester', 'private'),
      s('Bentley University', 'Waltham', 'private'), s('Babson College', 'Wellesley', 'private'),
      s('Emerson College', 'Boston', 'private'), s('Suffolk University', 'Boston', 'private'),
      s('Simmons University', 'Boston', 'private'), s('Stonehill College', 'Easton', 'private'),
      s('Assumption University', 'Worcester', 'private'), s('Merrimack College', 'North Andover', 'private'),
      s('Bridgewater State University', 'Bridgewater'), s('Salem State University', 'Salem'),
      s('Fitchburg State University', 'Fitchburg'), s('Framingham State University', 'Framingham'),
      s('Westfield State University', 'Westfield'), s('Massachusetts College of Art and Design', 'Boston'),
      s('Berklee College of Music', 'Boston', 'private'), s('Hampshire College', 'Amherst', 'private'),
    ]
  },
  {
    name: 'Michigan', slug: 'michigan', abbreviation: 'MI',
    schools: [
      s('University of Michigan', 'Ann Arbor'), s('Michigan State University', 'East Lansing'),
      s('Wayne State University', 'Detroit'), s('Western Michigan University', 'Kalamazoo'),
      s('Central Michigan University', 'Mount Pleasant'), s('Eastern Michigan University', 'Ypsilanti'),
      s('Oakland University', 'Rochester'), s('Grand Valley State University', 'Allendale'),
      s('Ferris State University', 'Big Rapids'), s('Northern Michigan University', 'Marquette'),
      s('Saginaw Valley State University', 'University Center'), s('Lake Superior State University', 'Sault Ste. Marie'),
      s('Michigan Technological University', 'Houghton'), s('University of Michigan-Dearborn', 'Dearborn'),
      s('University of Michigan-Flint', 'Flint'), s('Hope College', 'Holland', 'private'),
      s('Calvin University', 'Grand Rapids', 'private'), s('Kalamazoo College', 'Kalamazoo', 'private'),
      s('Albion College', 'Albion', 'private'), s('Alma College', 'Alma', 'private'),
      s('Adrian College', 'Adrian', 'private'), s('Hillsdale College', 'Hillsdale', 'private'),
      s('Kettering University', 'Flint', 'private'), s('Lawrence Technological University', 'Southfield', 'private'),
    ]
  },
  {
    name: 'Minnesota', slug: 'minnesota', abbreviation: 'MN',
    schools: [
      s('University of Minnesota Twin Cities', 'Minneapolis'), s('University of Minnesota Duluth', 'Duluth'),
      s('Minnesota State University Mankato', 'Mankato'), s('St. Cloud State University', 'St. Cloud'),
      s('Winona State University', 'Winona'), s('Bemidji State University', 'Bemidji'),
      s('Southwest Minnesota State University', 'Marshall'), s('University of St. Thomas', 'St. Paul', 'private'),
      s('Macalester College', 'St. Paul', 'private'), s('Carleton College', 'Northfield', 'private'),
      s('St. Olaf College', 'Northfield', 'private'), s('Gustavus Adolphus College', 'St. Peter', 'private'),
      s('Hamline University', 'St. Paul', 'private'), s('Augsburg University', 'Minneapolis', 'private'),
      s('Concordia College', 'Moorhead', 'private'), s('Bethel University', 'St. Paul', 'private'),
      s('College of Saint Benedict', 'St. Joseph', 'private'), s('Saint John\'s University', 'Collegeville', 'private'),
    ]
  },
  {
    name: 'Mississippi', slug: 'mississippi', abbreviation: 'MS',
    schools: [
      s('University of Mississippi', 'Oxford'), s('Mississippi State University', 'Starkville'),
      s('University of Southern Mississippi', 'Hattiesburg'), s('Jackson State University', 'Jackson'),
      s('Mississippi Valley State University', 'Itta Bena'), s('Alcorn State University', 'Lorman'),
      s('Delta State University', 'Cleveland'), s('Mississippi University for Women', 'Columbus'),
      s('Millsaps College', 'Jackson', 'private'), s('Belhaven University', 'Jackson', 'private'),
      s('Tougaloo College', 'Tougaloo', 'private'), s('William Carey University', 'Hattiesburg', 'private'),
    ]
  },
  {
    name: 'Missouri', slug: 'missouri', abbreviation: 'MO',
    schools: [
      s('University of Missouri', 'Columbia'), s('Washington University in St. Louis', 'St. Louis', 'private'),
      s('Saint Louis University', 'St. Louis', 'private'), s('Missouri State University', 'Springfield'),
      s('University of Missouri-Kansas City', 'Kansas City'), s('University of Missouri-St. Louis', 'St. Louis'),
      s('Missouri University of Science and Technology', 'Rolla'),
      s('Southeast Missouri State University', 'Cape Girardeau'), s('Northwest Missouri State University', 'Maryville'),
      s('Truman State University', 'Kirksville'), s('Drury University', 'Springfield', 'private'),
      s('Rockhurst University', 'Kansas City', 'private'), s('Webster University', 'Webster Groves', 'private'),
      s('Maryville University', 'St. Louis', 'private'), s('Lindenwood University', 'St. Charles', 'private'),
      s('William Jewell College', 'Liberty', 'private'), s('Westminster College', 'Fulton', 'private'),
    ]
  },
  {
    name: 'Montana', slug: 'montana', abbreviation: 'MT',
    schools: [
      s('University of Montana', 'Missoula'), s('Montana State University', 'Bozeman'),
      s('Montana Tech', 'Butte'), s('University of Montana Western', 'Dillon'),
      s('Montana State University Billings', 'Billings'), s('Carroll College', 'Helena', 'private'),
      s('Rocky Mountain College', 'Billings', 'private'),
    ]
  },
  {
    name: 'Nebraska', slug: 'nebraska', abbreviation: 'NE',
    schools: [
      s('University of Nebraska-Lincoln', 'Lincoln'), s('University of Nebraska Omaha', 'Omaha'),
      s('University of Nebraska at Kearney', 'Kearney'), s('Creighton University', 'Omaha', 'private'),
      s('Nebraska Wesleyan University', 'Lincoln', 'private'), s('Doane University', 'Crete', 'private'),
      s('Hastings College', 'Hastings', 'private'), s('Wayne State College', 'Wayne'),
      s('Chadron State College', 'Chadron'), s('Peru State College', 'Peru'),
      s('Concordia University Nebraska', 'Seward', 'private'),
    ]
  },
  {
    name: 'Nevada', slug: 'nevada', abbreviation: 'NV',
    schools: [
      s('University of Nevada Las Vegas', 'Las Vegas'), s('University of Nevada Reno', 'Reno'),
      s('Nevada State University', 'Henderson'), s('Sierra Nevada University', 'Incline Village', 'private'),
      s('College of Southern Nevada', 'Las Vegas'), s('Truckee Meadows Community College', 'Reno'),
      s('Great Basin College', 'Elko'), s('Western Nevada College', 'Carson City'),
    ]
  },
  {
    name: 'New Hampshire', slug: 'new-hampshire', abbreviation: 'NH',
    schools: [
      s('University of New Hampshire', 'Durham'), s('Dartmouth College', 'Hanover', 'private'),
      s('Plymouth State University', 'Plymouth'), s('Keene State College', 'Keene'),
      s('Saint Anselm College', 'Manchester', 'private'), s('Southern New Hampshire University', 'Manchester', 'private'),
      s('Franklin Pierce University', 'Rindge', 'private'), s('New England College', 'Henniker', 'private'),
      s('Colby-Sawyer College', 'New London', 'private'),
    ]
  },
  {
    name: 'New Jersey', slug: 'new-jersey', abbreviation: 'NJ',
    schools: [
      s('Princeton University', 'Princeton', 'private'), s('Rutgers University New Brunswick', 'New Brunswick'),
      s('Rutgers University Newark', 'Newark'), s('Rutgers University Camden', 'Camden'),
      s('New Jersey Institute of Technology', 'Newark'), s('Montclair State University', 'Montclair'),
      s('Rowan University', 'Glassboro'), s('The College of New Jersey', 'Ewing'),
      s('William Paterson University', 'Wayne'), s('Kean University', 'Union'),
      s('Seton Hall University', 'South Orange', 'private'), s('Stevens Institute of Technology', 'Hoboken', 'private'),
      s('Drew University', 'Madison', 'private'), s('Rider University', 'Lawrenceville', 'private'),
      s('Fairleigh Dickinson University', 'Teaneck', 'private'), s('Monmouth University', 'West Long Branch', 'private'),
      s('Stockton University', 'Galloway'), s('Ramapo College of New Jersey', 'Mahwah'),
      s('New Jersey City University', 'Jersey City'), s('Saint Peter\'s University', 'Jersey City', 'private'),
    ]
  },
  {
    name: 'New Mexico', slug: 'new-mexico', abbreviation: 'NM',
    schools: [
      s('University of New Mexico', 'Albuquerque'), s('New Mexico State University', 'Las Cruces'),
      s('New Mexico Institute of Mining and Technology', 'Socorro'),
      s('Eastern New Mexico University', 'Portales'), s('Western New Mexico University', 'Silver City'),
      s('New Mexico Highlands University', 'Las Vegas'), s('St. John\'s College', 'Santa Fe', 'private'),
    ]
  },
  {
    name: 'New York', slug: 'new-york', abbreviation: 'NY',
    schools: [
      s('New York University', 'New York', 'private'), s('Columbia University', 'New York', 'private'),
      s('Cornell University', 'Ithaca', 'private'), s('Syracuse University', 'Syracuse', 'private'),
      s('University of Rochester', 'Rochester', 'private'), s('Rensselaer Polytechnic Institute', 'Troy', 'private'),
      s('Fordham University', 'Bronx', 'private'), s('Colgate University', 'Hamilton', 'private'),
      s('Hamilton College', 'Clinton', 'private'), s('Vassar College', 'Poughkeepsie', 'private'),
      s('Barnard College', 'New York', 'private'), s('Bard College', 'Annandale-on-Hudson', 'private'),
      s('Skidmore College', 'Saratoga Springs', 'private'), s('Union College', 'Schenectady', 'private'),
      s('Hobart and William Smith Colleges', 'Geneva', 'private'),
      s('St. Lawrence University', 'Canton', 'private'), s('Clarkson University', 'Potsdam', 'private'),
      s('Marist College', 'Poughkeepsie', 'private'), s('Iona University', 'New Rochelle', 'private'),
      s('Manhattan College', 'Riverdale', 'private'), s('Pace University', 'New York', 'private'),
      s('The New School', 'New York', 'private'), s('Pratt Institute', 'Brooklyn', 'private'),
      s('School of Visual Arts', 'New York', 'private'), s('Fashion Institute of Technology', 'New York'),
      s('SUNY University at Buffalo', 'Buffalo'), s('SUNY Stony Brook University', 'Stony Brook'),
      s('SUNY University at Albany', 'Albany'), s('SUNY Binghamton University', 'Binghamton'),
      s('SUNY College at Geneseo', 'Geneseo'), s('SUNY College at Oswego', 'Oswego'),
      s('SUNY College at Plattsburgh', 'Plattsburgh'), s('SUNY College at Brockport', 'Brockport'),
      s('SUNY College at Cortland', 'Cortland'), s('SUNY College at Fredonia', 'Fredonia'),
      s('SUNY College at New Paltz', 'New Paltz'), s('SUNY College at Oneonta', 'Oneonta'),
      s('SUNY College at Potsdam', 'Potsdam'), s('SUNY College of Environmental Science and Forestry', 'Syracuse'),
      s('SUNY Purchase College', 'Purchase'), s('CUNY City College', 'New York'),
      s('CUNY Hunter College', 'New York'), s('CUNY Brooklyn College', 'Brooklyn'),
      s('CUNY Queens College', 'Queens'), s('CUNY Baruch College', 'New York'),
      s('CUNY John Jay College', 'New York'), s('CUNY College of Staten Island', 'Staten Island'),
      s('CUNY Lehman College', 'Bronx'), s('CUNY York College', 'Jamaica'),
      s('CUNY Medgar Evers College', 'Brooklyn'),
      s('Hofstra University', 'Hempstead', 'private'), s('Adelphi University', 'Garden City', 'private'),
      s('Long Island University', 'Brookville', 'private'), s('St. John\'s University', 'Queens', 'private'),
      s('Wagner College', 'Staten Island', 'private'), s('Siena College', 'Loudonville', 'private'),
      s('Le Moyne College', 'Syracuse', 'private'), s('Canisius University', 'Buffalo', 'private'),
      s('Niagara University', 'Niagara University', 'private'),
    ]
  },
  {
    name: 'North Carolina', slug: 'north-carolina', abbreviation: 'NC',
    schools: [
      s('University of North Carolina at Chapel Hill', 'Chapel Hill'),
      s('Duke University', 'Durham', 'private'), s('North Carolina State University', 'Raleigh'),
      s('Wake Forest University', 'Winston-Salem', 'private'),
      s('University of North Carolina at Charlotte', 'Charlotte'),
      s('East Carolina University', 'Greenville'),
      s('Appalachian State University', 'Boone'),
      s('University of North Carolina at Greensboro', 'Greensboro'),
      s('University of North Carolina Wilmington', 'Wilmington'),
      s('University of North Carolina at Asheville', 'Asheville'),
      s('Western Carolina University', 'Cullowhee'),
      s('North Carolina Central University', 'Durham'),
      s('North Carolina A&T State University', 'Greensboro'),
      s('Elon University', 'Elon', 'private'), s('Davidson College', 'Davidson', 'private'),
      s('High Point University', 'High Point', 'private'),
      s('Campbell University', 'Buies Creek', 'private'), s('Meredith College', 'Raleigh', 'private'),
      s('Guilford College', 'Greensboro', 'private'), s('Lenoir-Rhyne University', 'Hickory', 'private'),
      s('Queens University of Charlotte', 'Charlotte', 'private'), s('Catawba College', 'Salisbury', 'private'),
      s('Wingate University', 'Wingate', 'private'), s('Gardner-Webb University', 'Boiling Springs', 'private'),
      s('Belmont Abbey College', 'Belmont', 'private'), s('Pfeiffer University', 'Misenheimer', 'private'),
    ]
  },
  {
    name: 'North Dakota', slug: 'north-dakota', abbreviation: 'ND',
    schools: [
      s('University of North Dakota', 'Grand Forks'), s('North Dakota State University', 'Fargo'),
      s('Minot State University', 'Minot'), s('Dickinson State University', 'Dickinson'),
      s('Valley City State University', 'Valley City'), s('Mayville State University', 'Mayville'),
      s('University of Jamestown', 'Jamestown', 'private'),
    ]
  },
  {
    name: 'Ohio', slug: 'ohio', abbreviation: 'OH',
    schools: [
      s('Ohio State University', 'Columbus'), s('University of Cincinnati', 'Cincinnati'),
      s('Case Western Reserve University', 'Cleveland', 'private'),
      s('Ohio University', 'Athens'), s('Miami University', 'Oxford'),
      s('Kent State University', 'Kent'), s('University of Akron', 'Akron'),
      s('Bowling Green State University', 'Bowling Green'), s('University of Toledo', 'Toledo'),
      s('Wright State University', 'Dayton'), s('Cleveland State University', 'Cleveland'),
      s('Youngstown State University', 'Youngstown'), s('University of Dayton', 'Dayton', 'private'),
      s('Xavier University', 'Cincinnati', 'private'), s('John Carroll University', 'University Heights', 'private'),
      s('Capital University', 'Columbus', 'private'), s('Baldwin Wallace University', 'Berea', 'private'),
      s('Oberlin College', 'Oberlin', 'private'), s('Kenyon College', 'Gambier', 'private'),
      s('Denison University', 'Granville', 'private'), s('College of Wooster', 'Wooster', 'private'),
      s('Wittenberg University', 'Springfield', 'private'), s('Ohio Wesleyan University', 'Delaware', 'private'),
      s('Otterbein University', 'Westerville', 'private'), s('Muskingum University', 'New Concord', 'private'),
      s('Ashland University', 'Ashland', 'private'), s('Shawnee State University', 'Portsmouth'),
      s('Central State University', 'Wilberforce'), s('Cedarville University', 'Cedarville', 'private'),
    ]
  },
  {
    name: 'Oklahoma', slug: 'oklahoma', abbreviation: 'OK',
    schools: [
      s('University of Oklahoma', 'Norman'), s('Oklahoma State University', 'Stillwater'),
      s('University of Tulsa', 'Tulsa', 'private'), s('University of Central Oklahoma', 'Edmond'),
      s('Oral Roberts University', 'Tulsa', 'private'), s('Oklahoma City University', 'Oklahoma City', 'private'),
      s('Northeastern State University', 'Tahlequah'), s('Southeastern Oklahoma State University', 'Durant'),
      s('Southwestern Oklahoma State University', 'Weatherford'),
      s('Northwestern Oklahoma State University', 'Alva'),
      s('Cameron University', 'Lawton'), s('East Central University', 'Ada'),
      s('Langston University', 'Langston'), s('Oklahoma Baptist University', 'Shawnee', 'private'),
      s('Southern Nazarene University', 'Bethany', 'private'),
    ]
  },
  {
    name: 'Oregon', slug: 'oregon', abbreviation: 'OR',
    schools: [
      s('University of Oregon', 'Eugene'), s('Oregon State University', 'Corvallis'),
      s('Portland State University', 'Portland'), s('University of Portland', 'Portland', 'private'),
      s('Willamette University', 'Salem', 'private'), s('Lewis & Clark College', 'Portland', 'private'),
      s('Reed College', 'Portland', 'private'), s('Linfield University', 'McMinnville', 'private'),
      s('George Fox University', 'Newberg', 'private'), s('Pacific University', 'Forest Grove', 'private'),
      s('Western Oregon University', 'Monmouth'), s('Southern Oregon University', 'Ashland'),
      s('Eastern Oregon University', 'La Grande'), s('Oregon Institute of Technology', 'Klamath Falls'),
      s('Corban University', 'Salem', 'private'),
    ]
  },
  {
    name: 'Pennsylvania', slug: 'pennsylvania', abbreviation: 'PA',
    schools: [
      s('University of Pennsylvania', 'Philadelphia', 'private'),
      s('Carnegie Mellon University', 'Pittsburgh', 'private'),
      s('Penn State University', 'University Park'),
      s('University of Pittsburgh', 'Pittsburgh'),
      s('Temple University', 'Philadelphia'),
      s('Drexel University', 'Philadelphia', 'private'),
      s('Lehigh University', 'Bethlehem', 'private'),
      s('Villanova University', 'Villanova', 'private'),
      s('Bucknell University', 'Lewisburg', 'private'),
      s('Lafayette College', 'Easton', 'private'),
      s('Swarthmore College', 'Swarthmore', 'private'),
      s('Haverford College', 'Haverford', 'private'),
      s('Bryn Mawr College', 'Bryn Mawr', 'private'),
      s('Dickinson College', 'Carlisle', 'private'),
      s('Gettysburg College', 'Gettysburg', 'private'),
      s('Franklin & Marshall College', 'Lancaster', 'private'),
      s('Muhlenberg College', 'Allentown', 'private'),
      s('Ursinus College', 'Collegeville', 'private'),
      s('Duquesne University', 'Pittsburgh', 'private'),
      s('Saint Joseph\'s University', 'Philadelphia', 'private'),
      s('La Salle University', 'Philadelphia', 'private'),
      s('West Chester University', 'West Chester'),
      s('Millersville University', 'Millersville'),
      s('Shippensburg University', 'Shippensburg'),
      s('Kutztown University', 'Kutztown'),
      s('Bloomsburg University', 'Bloomsburg'),
      s('East Stroudsburg University', 'East Stroudsburg'),
      s('Slippery Rock University', 'Slippery Rock'),
      s('Indiana University of Pennsylvania', 'Indiana'),
      s('Clarion University', 'Clarion'),
      s('Edinboro University', 'Edinboro'),
      s('Lock Haven University', 'Lock Haven'),
      s('Mansfield University', 'Mansfield'),
      s('California University of Pennsylvania', 'California'),
      s('Chatham University', 'Pittsburgh', 'private'),
      s('Robert Morris University', 'Moon Township', 'private'),
      s('Mercyhurst University', 'Erie', 'private'),
      s('Elizabethtown College', 'Elizabethtown', 'private'),
      s('Susquehanna University', 'Selinsgrove', 'private'),
      s('Juniata College', 'Huntingdon', 'private'),
      s('Allegheny College', 'Meadville', 'private'),
      s('King\'s College', 'Wilkes-Barre', 'private'),
      s('Misericordia University', 'Dallas', 'private'),
      s('Wilkes University', 'Wilkes-Barre', 'private'),
    ]
  },
  {
    name: 'Rhode Island', slug: 'rhode-island', abbreviation: 'RI',
    schools: [
      s('Brown University', 'Providence', 'private'), s('University of Rhode Island', 'Kingston'),
      s('Providence College', 'Providence', 'private'), s('Rhode Island School of Design', 'Providence', 'private'),
      s('Bryant University', 'Smithfield', 'private'), s('Roger Williams University', 'Bristol', 'private'),
      s('Salve Regina University', 'Newport', 'private'), s('Johnson & Wales University', 'Providence', 'private'),
      s('Rhode Island College', 'Providence'),
    ]
  },
  {
    name: 'South Carolina', slug: 'south-carolina', abbreviation: 'SC',
    schools: [
      s('University of South Carolina', 'Columbia'), s('Clemson University', 'Clemson'),
      s('College of Charleston', 'Charleston'), s('The Citadel', 'Charleston'),
      s('Coastal Carolina University', 'Conway'), s('Furman University', 'Greenville', 'private'),
      s('Wofford College', 'Spartanburg', 'private'), s('Presbyterian College', 'Clinton', 'private'),
      s('Francis Marion University', 'Florence'), s('Winthrop University', 'Rock Hill'),
      s('South Carolina State University', 'Orangeburg'), s('Lander University', 'Greenwood'),
      s('Charleston Southern University', 'North Charleston', 'private'),
      s('Anderson University', 'Anderson', 'private'), s('Bob Jones University', 'Greenville', 'private'),
      s('Newberry College', 'Newberry', 'private'), s('Converse University', 'Spartanburg', 'private'),
      s('Erskine College', 'Due West', 'private'), s('Claflin University', 'Orangeburg', 'private'),
    ]
  },
  {
    name: 'South Dakota', slug: 'south-dakota', abbreviation: 'SD',
    schools: [
      s('University of South Dakota', 'Vermillion'), s('South Dakota State University', 'Brookings'),
      s('South Dakota School of Mines and Technology', 'Rapid City'),
      s('Northern State University', 'Aberdeen'), s('Black Hills State University', 'Spearfish'),
      s('Dakota State University', 'Madison'), s('Augustana University', 'Sioux Falls', 'private'),
    ]
  },
  {
    name: 'Tennessee', slug: 'tennessee', abbreviation: 'TN',
    schools: [
      s('University of Tennessee Knoxville', 'Knoxville'), s('Vanderbilt University', 'Nashville', 'private'),
      s('University of Memphis', 'Memphis'), s('Middle Tennessee State University', 'Murfreesboro'),
      s('East Tennessee State University', 'Johnson City'), s('Tennessee State University', 'Nashville'),
      s('Austin Peay State University', 'Clarksville'), s('Tennessee Technological University', 'Cookeville'),
      s('University of Tennessee at Chattanooga', 'Chattanooga'),
      s('University of Tennessee at Martin', 'Martin'),
      s('Belmont University', 'Nashville', 'private'), s('Lipscomb University', 'Nashville', 'private'),
      s('Rhodes College', 'Memphis', 'private'), s('Sewanee: University of the South', 'Sewanee', 'private'),
      s('Christian Brothers University', 'Memphis', 'private'), s('Lee University', 'Cleveland', 'private'),
      s('Carson-Newman University', 'Jefferson City', 'private'), s('Union University', 'Jackson', 'private'),
      s('Trevecca Nazarene University', 'Nashville', 'private'), s('Maryville College', 'Maryville', 'private'),
      s('Tennessee Wesleyan University', 'Athens', 'private'), s('Bryan College', 'Dayton', 'private'),
      s('Fisk University', 'Nashville', 'private'), s('Lincoln Memorial University', 'Harrogate', 'private'),
    ]
  },
  {
    name: 'Texas', slug: 'texas', abbreviation: 'TX',
    schools: [
      s('University of Texas at Austin', 'Austin'), s('Texas A&M University', 'College Station'),
      s('Rice University', 'Houston', 'private'), s('Southern Methodist University', 'Dallas', 'private'),
      s('Baylor University', 'Waco', 'private'), s('Texas Christian University', 'Fort Worth', 'private'),
      s('University of Houston', 'Houston'), s('Texas Tech University', 'Lubbock'),
      s('University of North Texas', 'Denton'), s('University of Texas at Dallas', 'Richardson'),
      s('University of Texas at San Antonio', 'San Antonio'), s('University of Texas at Arlington', 'Arlington'),
      s('University of Texas at El Paso', 'El Paso'),
      s('Texas State University', 'San Marcos'), s('Sam Houston State University', 'Huntsville'),
      s('Stephen F. Austin State University', 'Nacogdoches'), s('Lamar University', 'Beaumont'),
      s('Tarleton State University', 'Stephenville'), s('Texas Southern University', 'Houston'),
      s('Prairie View A&M University', 'Prairie View'), s('Texas A&M University-Commerce', 'Commerce'),
      s('Texas A&M University-Corpus Christi', 'Corpus Christi'),
      s('Texas A&M University-Kingsville', 'Kingsville'),
      s('West Texas A&M University', 'Canyon'), s('Angelo State University', 'San Angelo'),
      s('Midwestern State University', 'Wichita Falls'),
      s('Trinity University', 'San Antonio', 'private'), s('Abilene Christian University', 'Abilene', 'private'),
      s('St. Edward\'s University', 'Austin', 'private'), s('University of the Incarnate Word', 'San Antonio', 'private'),
      s('Texas Wesleyan University', 'Fort Worth', 'private'), s('Houston Baptist University', 'Houston', 'private'),
      s('Hardin-Simmons University', 'Abilene', 'private'), s('Howard Payne University', 'Brownwood', 'private'),
      s('LeTourneau University', 'Longview', 'private'), s('Dallas Baptist University', 'Dallas', 'private'),
      s('Schreiner University', 'Kerrville', 'private'), s('Southwestern University', 'Georgetown', 'private'),
      s('Austin College', 'Sherman', 'private'), s('University of Dallas', 'Irving', 'private'),
      s('University of Mary Hardin-Baylor', 'Belton', 'private'),
      s('Texas Lutheran University', 'Seguin', 'private'),
      s('Sul Ross State University', 'Alpine'), s('University of Texas Rio Grande Valley', 'Edinburg'),
      s('University of Texas Permian Basin', 'Odessa'), s('University of Texas Tyler', 'Tyler'),
    ]
  },
  {
    name: 'Utah', slug: 'utah', abbreviation: 'UT',
    schools: [
      s('University of Utah', 'Salt Lake City'), s('Brigham Young University', 'Provo', 'private'),
      s('Utah State University', 'Logan'), s('Weber State University', 'Ogden'),
      s('Southern Utah University', 'Cedar City'), s('Utah Valley University', 'Orem'),
      s('Dixie State University', 'St. George'), s('Westminster College', 'Salt Lake City', 'private'),
      s('Western Governors University', 'Salt Lake City', 'private'),
    ]
  },
  {
    name: 'Vermont', slug: 'vermont', abbreviation: 'VT',
    schools: [
      s('University of Vermont', 'Burlington'), s('Middlebury College', 'Middlebury', 'private'),
      s('Bennington College', 'Bennington', 'private'), s('Saint Michael\'s College', 'Colchester', 'private'),
      s('Champlain College', 'Burlington', 'private'), s('Norwich University', 'Northfield', 'private'),
      s('Castleton University', 'Castleton'), s('Northern Vermont University', 'Johnson'),
      s('Vermont Technical College', 'Randolph Center'),
    ]
  },
  {
    name: 'Virginia', slug: 'virginia', abbreviation: 'VA',
    schools: [
      s('University of Virginia', 'Charlottesville'), s('Virginia Tech', 'Blacksburg'),
      s('College of William & Mary', 'Williamsburg'), s('Virginia Commonwealth University', 'Richmond'),
      s('George Mason University', 'Fairfax'), s('James Madison University', 'Harrisonburg'),
      s('Old Dominion University', 'Norfolk'), s('Radford University', 'Radford'),
      s('Virginia Military Institute', 'Lexington'), s('University of Mary Washington', 'Fredericksburg'),
      s('Christopher Newport University', 'Newport News'), s('Longwood University', 'Farmville'),
      s('Norfolk State University', 'Norfolk'), s('Virginia State University', 'Petersburg'),
      s('Washington and Lee University', 'Lexington', 'private'),
      s('University of Richmond', 'Richmond', 'private'), s('Hampton University', 'Hampton', 'private'),
      s('Liberty University', 'Lynchburg', 'private'), s('Roanoke College', 'Salem', 'private'),
      s('Randolph-Macon College', 'Ashland', 'private'), s('Hampden-Sydney College', 'Hampden-Sydney', 'private'),
      s('Sweet Briar College', 'Sweet Briar', 'private'), s('Lynchburg University', 'Lynchburg', 'private'),
      s('Shenandoah University', 'Winchester', 'private'), s('Hollins University', 'Roanoke', 'private'),
      s('Marymount University', 'Arlington', 'private'), s('Regent University', 'Virginia Beach', 'private'),
      s('Virginia Wesleyan University', 'Virginia Beach', 'private'),
      s('Bridgewater College', 'Bridgewater', 'private'), s('Emory & Henry College', 'Emory', 'private'),
      s('Ferrum College', 'Ferrum', 'private'),
    ]
  },
  {
    name: 'Washington', slug: 'washington', abbreviation: 'WA',
    schools: [
      s('University of Washington', 'Seattle'), s('Washington State University', 'Pullman'),
      s('Western Washington University', 'Bellingham'), s('Eastern Washington University', 'Cheney'),
      s('Central Washington University', 'Ellensburg'), s('The Evergreen State College', 'Olympia'),
      s('Seattle University', 'Seattle', 'private'), s('Gonzaga University', 'Spokane', 'private'),
      s('Pacific Lutheran University', 'Tacoma', 'private'), s('University of Puget Sound', 'Tacoma', 'private'),
      s('Whitman College', 'Walla Walla', 'private'), s('Whitworth University', 'Spokane', 'private'),
      s('Seattle Pacific University', 'Seattle', 'private'), s('Saint Martin\'s University', 'Lacey', 'private'),
      s('Walla Walla University', 'College Place', 'private'),
      s('University of Washington Tacoma', 'Tacoma'), s('University of Washington Bothell', 'Bothell'),
    ]
  },
  {
    name: 'West Virginia', slug: 'west-virginia', abbreviation: 'WV',
    schools: [
      s('West Virginia University', 'Morgantown'), s('Marshall University', 'Huntington'),
      s('Shepherd University', 'Shepherdstown'), s('West Virginia State University', 'Institute'),
      s('Fairmont State University', 'Fairmont'), s('Concord University', 'Athens'),
      s('Glenville State University', 'Glenville'), s('West Liberty University', 'West Liberty'),
      s('Bluefield State University', 'Bluefield'), s('Davis & Elkins College', 'Elkins', 'private'),
      s('Bethany College', 'Bethany', 'private'), s('West Virginia Wesleyan College', 'Buckhannon', 'private'),
      s('Wheeling University', 'Wheeling', 'private'),
    ]
  },
  {
    name: 'Wisconsin', slug: 'wisconsin', abbreviation: 'WI',
    schools: [
      s('University of Wisconsin-Madison', 'Madison'), s('Marquette University', 'Milwaukee', 'private'),
      s('University of Wisconsin-Milwaukee', 'Milwaukee'),
      s('University of Wisconsin-Green Bay', 'Green Bay'),
      s('University of Wisconsin-La Crosse', 'La Crosse'),
      s('University of Wisconsin-Eau Claire', 'Eau Claire'),
      s('University of Wisconsin-Oshkosh', 'Oshkosh'),
      s('University of Wisconsin-Whitewater', 'Whitewater'),
      s('University of Wisconsin-Stevens Point', 'Stevens Point'),
      s('University of Wisconsin-Stout', 'Menomonie'),
      s('University of Wisconsin-Platteville', 'Platteville'),
      s('University of Wisconsin-River Falls', 'River Falls'),
      s('University of Wisconsin-Superior', 'Superior'),
      s('University of Wisconsin-Parkside', 'Kenosha'),
      s('Lawrence University', 'Appleton', 'private'), s('Beloit College', 'Beloit', 'private'),
      s('Ripon College', 'Ripon', 'private'), s('Carroll University', 'Waukesha', 'private'),
      s('St. Norbert College', 'De Pere', 'private'), s('Carthage College', 'Kenosha', 'private'),
      s('Concordia University Wisconsin', 'Mequon', 'private'), s('Edgewood College', 'Madison', 'private'),
      s('Alverno College', 'Milwaukee', 'private'), s('Viterbo University', 'La Crosse', 'private'),
    ]
  },
  {
    name: 'Wyoming', slug: 'wyoming', abbreviation: 'WY',
    schools: [
      s('University of Wyoming', 'Laramie'),
    ]
  },
  {
    name: 'District of Columbia', slug: 'district-of-columbia', abbreviation: 'DC',
    schools: [
      s('Georgetown University', 'Washington', 'private'), s('George Washington University', 'Washington', 'private'),
      s('American University', 'Washington', 'private'), s('Howard University', 'Washington', 'private'),
      s('Catholic University of America', 'Washington', 'private'),
      s('Gallaudet University', 'Washington', 'private'), s('Trinity Washington University', 'Washington', 'private'),
      s('University of the District of Columbia', 'Washington'),
    ]
  },
]

export function getStateBySlug(slug: string): StateData | undefined {
  return states.find(state => state.slug === slug)
}

export function getSchoolBySlug(stateSlug: string, schoolSlug: string): { state: StateData; school: School } | undefined {
  const state = getStateBySlug(stateSlug)
  if (!state) return undefined
  const school = state.schools.find(s => s.slug === schoolSlug)
  if (!school) return undefined
  return { state, school }
}

export function getTotalSchoolCount(): number {
  return states.reduce((sum, state) => sum + state.schools.length, 0)
}
