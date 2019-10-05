import transport, { REACT_APP_API_URL } from "./transport";

/**
 * 获取所有测试
 */
export const countryAll = () => {
  const params = {
    url: `${REACT_APP_API_URL}/v1/all`
  };
  return transport(params);
}
