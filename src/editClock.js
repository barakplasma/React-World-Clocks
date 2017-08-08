function editClock(key) {
    // console.log('attempted edit of ',key);
    let newTZ = prompt('Please Enter a new Timezone', 'Asia/Omsk');
    this.setState({
        ...this.state.currentTime,
        ...this.state.timezones.splice(key, 1, newTZ)
    })
}

export default editClock;