import smartpy as sp

empty_doc = sp.record(
    timestamp=sp.timestamp(0), createdBy="", name="")


class Certicrypt(sp.Contract):
    def __init__(self, initialOwner):
        self.init(
            owner=initialOwner,
            hashToDoc=sp.map(tkey=sp.TString),
            lastDoc=empty_doc)

    @ sp.entry_point
    def register_doc(self, params):
        self.checkDoc(params.hash)
        self.data.hashToDoc[params.hash].timestamp = sp.now
        self.data.hashToDoc[params.hash].name = params.name
        self.data.hashToDoc[params.hash].createdBy = params.createdBy

    def checkDoc(self, dochash):
        sp.if ~(self.data.hashToDoc.contains(dochash)):
            self.data.hashToDoc[dochash] = empty_doc

    @ sp.entry_point
    def validate_doc(self, params):
        sp.if (self.data.hashToDoc.contains(params.hash)):
            self.data.lastDoc = self.data.hashToDoc[params.hash]
        sp.else:
            # No document found with the provided hash.
            self.data.lastDoc = empty_doc


@ sp.add_test(name="Certicrypt")
def register_test():
    scenario = sp.test_scenario()
    scenario.h1("Minimal")
    owner = sp.address("tz1-firstOwner-address-1234")
    c1 = Certicrypt(owner)
    scenario += c1
    scenario += c1.register_doc(hash='XXX',
                                name='doc1', createdBy='John')
    scenario.verify(c1.data.hashToDoc['XXX'].name == 'doc1')

    # Create HTML output for debugging

    c2 = Certicrypt(owner)
    scenario += c2
    scenario.h1("Register/Validate")
    scenario += c2.register_doc(hash='XXX',
                                name='doc1', createdBy='John')
    scenario += c2.validate_doc(hash='XXX')
    scenario.verify(c2.data.lastDoc.name == 'doc1')
    scenario += c2.validate_doc(hash='YYY')
    scenario.verify(c2.data.lastDoc == empty_doc)
