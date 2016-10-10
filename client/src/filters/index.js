export function host(url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

/*
export function loggedIn() {
  return !!localStorage.getItem("feathers-jwt");
  // return !!services.app.get('token'); //currently a bug with this.
}*/

export function inTimeAgo(time) {
  const timeDifference = (Date.now() - time) / 1000;
//handle times in the future
  if (timeDifference < 0) {
    if (timeDifference < -31104000) {
      return pluralize(~~(timeDifference / 31104000), ' year')
    } else if (timeDifference < -2592000) {
      return pluralize(~~(timeDifference / 2592000), ' month')
    } else if (timeDifference < -86400) {
      return pluralize(~~(timeDifference / 86400), ' day')
    } else if (timeDifference < -3600) {
      return pluralize(~~(timeDifference / 3600), ' hour')
    } else if (timeDifference < -60) {
      return pluralize(~~(timeDifference / 60), ' minute')
    } else {
      return pluralize(~~(timeDifference), ' second')
    }

  } else {
    //handle times in the past
    if (timeDifference < 60) {
      return pluralize(~~(timeDifference), ' second')
    } else if (timeDifference < 3600) {
      return pluralize(~~(timeDifference / 60), ' minute')
    } else if (timeDifference < 86400) {
      return pluralize(~~(timeDifference / 3600), ' hour')
    } else if (timeDifference < 2592000) {
      return pluralize(~~(timeDifference / 86400), ' day')
    } else if (timeDifference < 31104000) {
      return pluralize(~~(timeDifference / 2592000), ' month')
    } else {
      return pluralize(~~(timeDifference / 31104000), ' year')
    }
  }
}

function pluralize(time, label) {
  //handle labels in the future
  if (time < 0) {
    if (time === -1) {
      return 'in ' + -(time) + label
    }
    return 'in ' + -(time) + label + 's'

  } else {
    //handle labels in the past
    if (time === 1) {
      return time + label + ' ago'
    }
    return time + label + 's ago'
  }
}
