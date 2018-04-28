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
        public IEnumerable<EmailTemplateModel> GetAllEmailTemplatesSorted(string columnSortBy, int pageNum)
        {
            var items = _emailTemplateSvc.GetAllTemplatesSorted(columnSortBy, pageNum);

            return items;
        }

        //public IEnumerable<EmailTemplateModel> GetAllEmailTemplates()
        //{
        //    var items = _emailTemplateSvc.GetAllTemplates();
        //    return items;
        //}


    }

    
}
