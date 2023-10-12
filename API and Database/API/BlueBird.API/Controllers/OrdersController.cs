using BlueBird.DataConext.Data;
using BlueBird.DataContext.Models;
using BlueBird.Reponsitory.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TimeTable.DataContext.Models;

namespace BlueBird.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrdersRepons _orders;

        public OrdersController(IOrdersRepons orders) 
        {
            _orders = orders;
        }

        [HttpPost]
        public async Task<MethodResult> AddOrders(OrdersModel orders, string token, Guid? IdCart) 
        {
            var result = await _orders.AddOrdersAsync(token, orders, IdCart);
            if(result == null || result == "Thêm đơn hàng thất bại")
            {
                return MethodResult.ResultWithError(result, 400, "Error", 0);
            }
            return MethodResult.ResultWithSuccess(result, 200, "Successfull", 0);
        }
        [HttpGet]
        public async Task<MethodResult> GetALLOrders(int pageIndex, int pageSize, string? search, string token)
        {
            var result = await _orders.GetAllOrderAsync(pageIndex, pageSize, search, token);
            if (result.Item1 == null)
            {
                return MethodResult.ResultWithError(result.Item1, 400, "Error", 0);
            }
            return MethodResult.ResultWithSuccess(result.Item1, 200, "Successfull", result.Item2);
        }
    }
}
