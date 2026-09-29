export const simulateRequest = (method, endpoint, payload = null, delay = 800) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[Mock API] ${method} ${endpoint}`, payload ? payload : '');
      resolve({ status: 200, data: payload, message: 'Success' });
    }, delay + Math.random() * 400); // 800ms to 1200ms latency
  });
};

export const simulateGet = (endpoint) => simulateRequest('GET', endpoint);
export const simulatePost = (endpoint, payload) => simulateRequest('POST', endpoint, payload);
export const simulateDelete = (endpoint, payload) => simulateRequest('DELETE', endpoint, payload);
