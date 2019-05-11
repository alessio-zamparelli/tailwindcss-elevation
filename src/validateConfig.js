function validateColor(color) {
  if (!color) {
    return null;
  }

  const regex = /\s*\d+\s*\,\s*\d+\s*\,\s*\d+\s*/;
  if (regex.test(color)) {
    return null;
  } else {
    return new Error(`Invalid color value: ${color}`);
  }
}

function validateOpacityBoost(opacityBoost) {
  if (!opacityBoost) {
    return null;
  }

  const err = new Error(`Invalid opacityBoost value: ${opacityBoost}`);
  const num = parseFloat(opacityBoost);
  if (isNaN(num)) {
    return err;
  }
  if (num < 0 || num > 1) {
    return err;
  }

  return null;
}

module.exports = function validateConfig(config) {
  if (!config) {
    return null;
  }

  const error =
    validateColor(config.color) || validateOpacityBoost(config.opacityBoost);
  if (!error) {
    return null;
  }

  return error;
};
