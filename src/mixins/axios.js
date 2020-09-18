
export const axiosDatas = {
  methods: {
    // get请求获取数据
    getData (url = '', params = {}) {
      return new Promise((resolve, reject) => {
        try {
          this.$axios({
            method: 'get',
            url,
            params
          }).then(res => {
            resolve(res)
          })
        } catch (err) {
          reject(err)
        }
      })
    },
    // post请求获取数据
    postData (url = '', params = {}) {
      return new Promise((resolve, reject) => {
        try {
          this.$axios({
            method: 'post',
            url,
            data: {
              ...params
            }
          }).then(res => {
            resolve(res)
          })
        } catch (err) {
          reject(err)
        }
      })
    },
    // put请求获取数据
    putData (url = '', params = {}) {
      return new Promise((resolve, reject) => {
        try {
          this.$axios.put(url, {
            ...params
          }).then(res => {
            resolve(res)
          })
        } catch (err) {
          reject(err)
        }
      })
    },
    delData (url = '', params = {}) {
      return new Promise((resolve, reject) => {
        try {
          this.$axios.delete(url, params).then(res => {
            resolve(res)
          })
        } catch (err) {
          reject(err)
        }
      })
    }
  }
}
