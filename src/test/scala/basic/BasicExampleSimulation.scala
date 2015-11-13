package basic

import com.excilys.ebi.gatling.core.Predef._
import com.excilys.ebi.gatling.http.Predef._
import bootstrap._
import akka.util.duration._
import org.slf4j.LoggerFactory
import java.util.Random

class BasicExampleSimulation extends Simulation {
  val logger = LoggerFactory.getLogger("basic.test")
  val loginHeader = Map("Accept" -> "application/json", "Content-Type" -> "application/x-www-form-urlencoded")
  val jsonType = Map("Accept" -> "application/json")
  val frIds = csv("FR_IDS.csv").random
  val numUsers = 10
  val numRepeats = 10

  val hitMainRegistrationPageScn = scenario("Main Registration Page")
  .feed(frIds)
    .repeat(numRepeats)
    {
      exec(http("Hit Main Registration Page")
        .get("http://bvtorg1003.bvtorg10.conviocloud.com/site/TR?fr_id=${FR_ID}&pg=entry")
        .check(bodyString.saveAs("body"))
        .check(status.is(200))
      )
  }

  val hitIndividualRegistrationPage1Scn = scenario("Individual Registration Page 1")
    .feed(frIds)
      .repeat(numRepeats)
      {
        exec(http("Hit Individual Registration Page 1")
          .get("https://secure-bvtorg10.conviocloud.com/bvtorg1003/site/TRR/RelayForLife/General/745647038?pg=ptype&fr_id=${FR_ID}")
          .check(bodyString.saveAs("body"))
          .check(status.is(200))
        )
    }


      val hitFindParticipantOrTeamPageScn = scenario("Find Participant or Team Page")
        .feed(frIds)
          .repeat(numRepeats)
          {
            exec(http("Hit Find Participant or Team Page")
              .get("http://bvtorg1003.bvtorg10.conviocloud.com/site/TR/RelayForLife/General?pg=pfind&fr_id=${FR_ID}")
              .check(bodyString.saveAs("body"))
              .check(status.is(200))
            )
        }


          val hitCompanyListPageScn = scenario("Company List Page")
            .feed(frIds)
              .repeat(numRepeats)
              {
                exec(http("Hit Company List Page")
                  .get("http://bvtorg1003.bvtorg10.conviocloud.com/site/TR/RelayForLife/General?pg=complist&fr_id=${FR_ID}")
                  .check(bodyString.saveAs("body"))
                  .check(status.is(200))
                )
            }


              val searchForParticipantPageScn = scenario("Search for Participant or Team Page")
                .feed(frIds)
                  .repeat(numRepeats)
                  {
                    exec(http("Search for Participant or Team Page")
                    			.post("http://bvtorg1003.bvtorg10.conviocloud.com/site/TR?s_tr_part_finder_search_mode=basic")
                    			.param("fr_search_type", "participant")
                    			.param("searchFirstName", "")
                    			.param("searchCaptainFirstName", "")
                    			.param("searchLastName", "")
                    			.param("searchCaptainLastName", "")
                    			.param("searchTeam", "")
                    			.param("searchCompany", "")
                    			.param("fr_find_search", "Search")
                    			.param("fr_id", "71876")
                    			.param("pg", "pfind")
                    			.param("submit", "true")
                              .check(bodyString.saveAs("body"))
                              .check(status.is(200))
                    )
                }

                val hitJoinOrFormTeamWithTrDropdownScn = scenario("Join or Form a Team Page with TR Dropdown")
                                .feed(frIds)
                                  .repeat(numRepeats)
                                  {
                                    exec(http("Hit Join or Form a Team Page with TR Dropdown")
                                      //.get("http://localhost/site/TRR/Events/General/600392726?pg=ptype&fr_id=${FR_ID}")
                                      //.get("http://localhost/site/ConvioLogin?USERNAME=convio&Password0=Password0&convioPassword=Super")
                                      .get("https://secure-bvtorg10.conviocloud.com/bvtorg1003/site/TRR/RelayForLife/General/1895108244?pg=tfind&fr_id=${FR_ID}")
                                      //.get("https://secure7-sdodev.blackbaudcloud.com/etf702/site/TRR/RelayForLife/General/1895108244?pg=tfind&fr_id=${FR_ID}")
                                      .check(bodyString.saveAs("body"))
                                      .check(status.is(200))
                                    )
                                }

  setUp(hitMainRegistrationPageScn.users(numUsers).ramp(30 seconds),
  hitIndividualRegistrationPage1Scn.users(numUsers).ramp(30 seconds),
  hitFindParticipantOrTeamPageScn.users(numUsers).ramp(30 seconds),
  hitCompanyListPageScn.users(numUsers).ramp(30 seconds),
  searchForParticipantPageScn.users(numUsers).ramp(30 seconds),
  hitJoinOrFormTeamWithTrDropdownScn.users(numUsers).ramp(30 seconds))

}
