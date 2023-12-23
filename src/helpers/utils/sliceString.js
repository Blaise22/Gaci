
const sliceString = (value,length) => {
    return value?.length>length?value?.slice(0,length)+'...':value

}
export default sliceString