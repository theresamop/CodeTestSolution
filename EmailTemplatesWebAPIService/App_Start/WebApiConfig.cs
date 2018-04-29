using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace EmailTemplatesWebAPIService
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{columnSortBy}/{pageNum}",
            //    defaults: new { columnSortBy = RouteParameter.Optional, pageNum  = RouteParameter.Optional }
            //);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{columnSortBy}/{pageNum}",
                defaults: new { columnSortBy = RouteParameter.Optional, pageNum = RouteParameter.Optional }
            );
        }
    }
}
