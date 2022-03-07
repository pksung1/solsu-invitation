const usePhone = (number: string) => {
  return {
    phone: `tel:${number}`,
    msg: `sms:${number}`
  }
}

export default usePhone;