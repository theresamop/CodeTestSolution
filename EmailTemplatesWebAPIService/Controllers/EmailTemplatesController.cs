using CodingTest.Interfaces;
using CodingTest.Services;
using EmailTemplatesWebAPIService.Model;
using Modules.Business;
using System.Collections;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Mvc;

namespace EmailTemplatesWebAPIService.Controllers
{
    [System.Web.Mvc.RoutePrefix("api/emailtemplates")]
    public class EmailTemplatesController : ApiController
    {
         protected EmailTemplateSvc _emailTemplateSvc;

        public EmailTemplatesController() 
        {
            _emailTemplateSvc = new EmailTemplateSvc();
        }

        public JsonResult GetAllEmailTemplatesSorted(string columnSortBy="EmailLabelAscending", int pageNum=1)
        {
            
            EmailTemplatVieweModel vm = new EmailTemplatVieweModel();
            vm.EmailTemplateModels = _emailTemplateSvc.GetAllTemplatesSorted(columnSortBy, pageNum, out int totalCnt);
            vm.ItemsTotalCount = totalCnt;
            vm.ItemsPageSz = 10;

            return new JsonResult() { Data = vm, JsonRequestBehavior = JsonRequestBehavior.DenyGet };
        }
        


    }

    
}
