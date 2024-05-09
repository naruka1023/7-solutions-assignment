import { ICompiledData, dummyData, receivedData } from "./model";
export default async function GetData() {
  const data: dummyData[] = await fetchData()
  let slicedData = data.slice(0, 5)
  console.log(JSON.parse(JSON.stringify(slicedData)))
  const compiledData = aggregateData(data)
  return (
    <>
      {[compiledData].map((a: any,i: number)=>{
        return(
          <pre className="py-3">
            {JSON.stringify(a, null, 2)}
          </pre>
        );
      })}
    </>
    )  
  }
  
  export function aggregateData(allData: dummyData[]){
    let result: ICompiledData = {}
    allData.forEach((data: dummyData)=>{
      if(result[data.company.department] == undefined){
        result[data.company.department] = {
          male: 0,                      // ---> Male Count Summary
          female: 0,                    // ---> Female Count Summary
          ageRange: "",                 // ---> Range
          hair: {                       // ---> "Color": Color Summary
              Black: 0,                
              Blond: 0,
              Chestnut: 0,
              Brown: 0
          },
          addressUser: {}                // ---> "firstNamelastName": postalCode
        }
      }
      let dataToBeUpdated = result[data.company.department]!
      if(dataToBeUpdated.ageRange  === ""){
        dataToBeUpdated.ageRange = data.age + ''
      }else{
        if(dataToBeUpdated.ageRange.indexOf("-") == -1){
          dataToBeUpdated.ageRange = 
            data.age > parseInt(dataToBeUpdated.ageRange)?
            `${dataToBeUpdated.ageRange}-${data.age}`:
            `${data.age}-${dataToBeUpdated.ageRange}`;
        }else{
          let [currentMin, currentMax] = dataToBeUpdated.ageRange.split('-')
          if(data.age  < parseInt(currentMin)){
            currentMin = data.age.toString()
          }
          if(data.age > parseInt(currentMax)){
            currentMax = data.age.toString()
          }
          dataToBeUpdated.ageRange  = `${currentMin}-${currentMax}`
        }
      }
      data.gender == "male"? dataToBeUpdated.male++ : dataToBeUpdated.female++
      switch(data.hair.color){
        case  'Black':
          dataToBeUpdated.hair.Black++;
          break;
        case  'Blond':
          dataToBeUpdated.hair.Blond++;
          break;
        case  'Chestnut':
          dataToBeUpdated.hair.Chestnut++;
          break;
        case  'Brown':
          dataToBeUpdated.hair.Brown++;
          break;
      }
      dataToBeUpdated.addressUser[data.firstName + data.lastName] = data.address.postalCode
      result[data.company.department] = dataToBeUpdated
    })
    return result
  }

  async function fetchData(){
    const url = "https://dummyjson.com/users";
    let res = await fetch(url)
    const result: receivedData =  await res.json()
    return result.users
  }
