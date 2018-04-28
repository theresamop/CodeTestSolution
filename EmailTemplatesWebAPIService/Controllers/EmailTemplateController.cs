using CodingTest.Interfaces;
using CodingTest.Services;
using EmailTemplatesWebAPIService.Model;
using Modules.Business;
using System.Collections;
using System.Collections.Generic;
using System.Web.Http;

namespace EmailTemplatesWebAPIService.Controllers
{
    public class EmailTemplateController : ApiController
    {
         protected IEmailTemplateSvc _emailTemplateSvc;

        public EmailTemplateController() 
        {
            _emailTemplateSvc = new EmailTemplateSvc();
        }
        public EmailTemplatVieweModel GetAllEmailTemplatesSorted(string columnSortBy, int pageNum)
        {
            EmailTemplatVieweModel vm = new EmailTemplatVieweModel();
            vm.EmailTemplateModels = _emailTemplateSvc.GetAllTemplatesSorted(columnSortBy, pageNum, out int totalCnt);
            vm.ItemsTotalCount = totalCnt;
            vm.ItemsPageSz = 10;
            return vm;
        }

        //public IEnumerable<EmailTemplateModel> GetAllEmailTemplates()
        //{
        //    var items = _emailTemplateSvc.GetAllTemplates();
        //    return items;
        //}


    }

    
}
