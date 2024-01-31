
export const ACTION_TYPES ={
    JOBROLE:"jobrole",
    UPDATE_COMPANY_AVAILABILITY:"updateCompanyAvailability",
    UPDATE_LOCATION_AVALIBILITY:"updateLocationAvailability",
    UPDATE_DATE_AVALIBILITY:"updateDateAvailability",
    UPDATE_SALARY_AVALIBILITY:"updateSalaryAvailability"
}

export const jobrole = (value) =>{
    return{
        type: ACTION_TYPES.JOBROLE,
        payload: value
    }
} 

export const updateCompanyAvailability = (companyName) =>{
    return {
    type: ACTION_TYPES.UPDATE_COMPANY_AVAILABILITY,
    payload: companyName
  } }

  export const updateLocationAvailability = (location) =>{
    return {
    type: ACTION_TYPES.UPDATE_LOCATION_AVALIBILITY,
    payload: location
  } }

  export const updateDateAvailability = (date) =>{
    return {
    type: ACTION_TYPES.UPDATE_DATE_AVALIBILITY,
    payload: date
  } }

  export const updateSalaryAvailability = (salary) =>{
    return {
    type: ACTION_TYPES.UPDATE_DATE_AVALIBILITY,
    payload: salary
  } }




  

