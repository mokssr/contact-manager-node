exports.formatResponse = (payload, success = true, message = "") => {
  return JSON.stringify({
    success: success,
    message: message,
    data: payload
  })
}

exports.contactMessageTemplate = {
  added: "Contact added to list.",
  deleted: "Contact deleted from list.",
  updated: "Contact updated."
}

exports.queryMessageTemplate = {
  invalidPage: "Invalid variable page.",
  invalidLimit: "Invalid variable limit."
}